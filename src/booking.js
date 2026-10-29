import './main.js'

const bookingForm = document.querySelector('#booking-form')

if (bookingForm) {
  const panels = [...document.querySelectorAll('[data-booking-step]')]
  const progressItems = [...document.querySelectorAll('[data-progress-step]')]
  const alertBox = document.querySelector('#booking-alert')
  const confirmationPanel = document.querySelector('#booking-confirmation')
  const progressBar = document.querySelector('[data-progress-bar]')
  const speciesField = document.querySelector('#pet-species')
  const speciesOtherWrap = document.querySelector('#species-other-wrap')
  const reasonField = document.querySelector('#appointment-reason')
  const reasonOtherWrap = document.querySelector('#reason-other-wrap')
  const calendarDays = document.querySelector('#calendar-days')
  const calendarLabel = document.querySelector('#calendar-month')
  const timeList = document.querySelector('#time-list')
  const selectedDateLabel = document.querySelector('#selected-date-label')
  const selectedTimeLabel = document.querySelector('#selected-time-label')
  const demoTimeZone = document.querySelector('#demo-timezone')

  const booking = {
    step: 1,
    date: null,
    time: '',
    month: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  }

  const formatDate = (date, options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) =>
    new Intl.DateTimeFormat('es', options).format(date)

  const localDateKey = (date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const showAlert = (message = '') => {
    alertBox.textContent = message
    alertBox.hidden = !message
  }

  const updateProgress = (activeStep) => {
    progressItems.forEach((item) => {
      const stepNumber = Number(item.dataset.progressStep)
      item.dataset.complete = String(stepNumber < activeStep)
      item.dataset.active = String(stepNumber === activeStep)
      if (stepNumber === activeStep) item.setAttribute('aria-current', 'step')
      else item.removeAttribute('aria-current')
    })
    if (progressBar) {
      progressBar.classList.remove('w-1/3', 'w-2/3', 'w-full')
      progressBar.classList.add(activeStep === 1 ? 'w-1/3' : activeStep === 2 ? 'w-2/3' : 'w-full')
    }
  }

  const showStep = (stepNumber) => {
    booking.step = stepNumber
    confirmationPanel.hidden = true
    document.querySelector('[data-stepper]').hidden = false
    panels.forEach((panel) => {
      panel.hidden = Number(panel.dataset.bookingStep) !== stepNumber
    })
    updateProgress(stepNumber)
    showAlert('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    document.querySelector(`[data-booking-step="${stepNumber}"] h1`)?.focus({ preventScroll: true })
  }

  const validatePanel = (stepNumber) => {
    const panel = panels.find((node) => Number(node.dataset.bookingStep) === stepNumber)
    const fields = [...panel.querySelectorAll('input, select, textarea')].filter((field) => !field.disabled && !field.closest('[hidden]'))
    const invalidField = fields.find((field) => !field.checkValidity())
    if (invalidField) {
      invalidField.reportValidity()
      invalidField.focus()
      return false
    }
    return true
  }

  const updateOptionalFields = () => {
    const isOtherSpecies = speciesField.value === 'otro'
    speciesOtherWrap.hidden = !isOtherSpecies
    document.querySelector('#pet-species-other').required = isOtherSpecies

    const isOtherReason = reasonField.value === 'otro'
    reasonOtherWrap.hidden = !isOtherReason
    document.querySelector('#reason-other').required = isOtherReason
  }

  speciesField.addEventListener('change', updateOptionalFields)
  reasonField.addEventListener('change', updateOptionalFields)
  updateOptionalFields()

  document.querySelectorAll('[data-next-step]').forEach((button) => {
    button.addEventListener('click', () => {
      const currentStep = Number(button.dataset.nextStep)
      if (!validatePanel(currentStep)) return
      if (currentStep === 2 && (!booking.date || !booking.time)) {
        showAlert('Selecciona una fecha y un horario disponible para continuar.')
        return
      }
      if (currentStep === 2) updateReview()
      showStep(currentStep + 1)
    })
  })

  document.querySelectorAll('[data-previous-step]').forEach((button) => {
    button.addEventListener('click', () => showStep(Number(button.dataset.previousStep)))
  })

  document.querySelector('[data-reset-booking]')?.addEventListener('click', () => {
    bookingForm.reset()
    booking.date = null
    booking.time = ''
    updateOptionalFields()
    showStep(1)
    renderCalendar()
    renderTimes()
  })

  const demoSlotsForDate = (date) => {
    // Horarios ficticios para la demo: no consultar ni interpretar como disponibilidad real.
    if (date.getDay() === 0 || date.getDate() % 6 === 0) return []
    return ['10:00', '11:30', '14:00', '15:30']
  }

  const renderCalendar = () => {
    const year = booking.month.getFullYear()
    const month = booking.month.getMonth()
    calendarLabel.textContent = formatDate(booking.month, { month: 'long', year: 'numeric' })
    calendarDays.replaceChildren()

    const firstDay = new Date(year, month, 1)
    const mondayFirstOffset = (firstDay.getDay() + 6) % 7
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const dayHeaders = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    dayHeaders.forEach((day, index) => {
      const label = document.createElement('span')
      label.className = 'calendar-weekday'
      label.textContent = day
      label.setAttribute('aria-hidden', 'true')
      calendarDays.append(label)
    })

    for (let blank = 0; blank < mondayFirstOffset; blank += 1) {
      const spacer = document.createElement('span')
      spacer.className = 'calendar-spacer'
      spacer.setAttribute('aria-hidden', 'true')
      calendarDays.append(spacer)
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(year, month, day)
      const button = document.createElement('button')
      button.type = 'button'
      button.className = 'calendar-day'
      button.textContent = String(day)
      button.disabled = date <= today
      button.setAttribute('aria-label', formatDate(date))
      button.setAttribute('aria-pressed', String(booking.date && localDateKey(date) === localDateKey(booking.date)))
      if (booking.date && localDateKey(date) === localDateKey(booking.date)) button.classList.add('is-selected')
      button.addEventListener('click', () => {
        booking.date = date
        booking.time = ''
        selectedDateLabel.textContent = formatDate(date)
        selectedTimeLabel.textContent = 'Selecciona un horario'
        renderCalendar()
        renderTimes()
        updateReview()
      })
      calendarDays.append(button)
    }
  }

  const renderTimes = () => {
    timeList.replaceChildren()
    if (!booking.date) {
      const message = document.createElement('p')
      message.className = 'text-sm text-muted'
      message.textContent = 'Primero selecciona una fecha.'
      timeList.append(message)
      return
    }

    const slots = demoSlotsForDate(booking.date)
    if (slots.length === 0) {
      const message = document.createElement('p')
      message.className = 'col-span-full rounded-xl bg-amber-50 p-4 text-sm text-amber-900'
      message.textContent = 'No hay horarios de ejemplo para esta fecha. Elige otro día.'
      timeList.append(message)
      return
    }

    slots.forEach((slot) => {
      const button = document.createElement('button')
      button.type = 'button'
      button.className = 'time-slot'
      button.textContent = slot
      button.setAttribute('aria-pressed', String(booking.time === slot))
      button.addEventListener('click', () => {
        booking.time = slot
        selectedTimeLabel.textContent = slot
        renderTimes()
        updateReview()
      })
      timeList.append(button)
    })
  }

  const getFieldValue = (selector, fallback = '') => document.querySelector(selector)?.value.trim() || fallback

  const updateReview = () => {
    const speciesSelect = document.querySelector('#pet-species')
    const species = speciesSelect.value === 'otro'
      ? getFieldValue('#pet-species-other', 'Otra especie')
      : speciesSelect.selectedOptions[0]?.textContent || '—'
    const reasonSelect = document.querySelector('#appointment-reason')
    const reason = reasonSelect.value === 'otro'
      ? getFieldValue('#reason-other', 'Otro motivo')
      : reasonSelect.selectedOptions[0]?.textContent || '—'
    const name = getFieldValue('#pet-name', 'Sin indicar')
    const ageValue = getFieldValue('#pet-age')
    const age = ageValue ? `${ageValue} ${document.querySelector('#pet-age-unit').value}` : 'Sin indicar'

    document.querySelectorAll('[data-review-species]').forEach((node) => { node.textContent = species })
    document.querySelectorAll('[data-review-name]').forEach((node) => { node.textContent = name })
    document.querySelectorAll('[data-review-age]').forEach((node) => { node.textContent = age })
    document.querySelectorAll('[data-review-reason]').forEach((node) => { node.textContent = reason })
    document.querySelectorAll('[data-review-date]').forEach((node) => { node.textContent = booking.date ? formatDate(booking.date) : '—' })
    document.querySelectorAll('[data-review-time]').forEach((node) => { node.textContent = booking.time || '—' })
    document.querySelectorAll('[data-review-owner]').forEach((node) => { node.textContent = getFieldValue('#owner-name', '—') })
    document.querySelectorAll('[data-review-phone]').forEach((node) => { node.textContent = getFieldValue('#owner-phone', '—') })
  }

  document.querySelector('#owner-name')?.addEventListener('input', updateReview)
  document.querySelector('#owner-phone')?.addEventListener('input', updateReview)
  bookingForm.querySelectorAll('#pet-species, #pet-species-other, #pet-name, #pet-age, #pet-age-unit, #appointment-reason, #reason-other').forEach((field) => {
    field.addEventListener('input', updateReview)
    field.addEventListener('change', updateReview)
  })

  document.querySelector('#calendar-prev')?.addEventListener('click', () => {
    const thisMonth = new Date()
    thisMonth.setDate(1)
    if (booking.month <= thisMonth) return
    booking.month = new Date(booking.month.getFullYear(), booking.month.getMonth() - 1, 1)
    renderCalendar()
  })
  document.querySelector('#calendar-next')?.addEventListener('click', () => {
    booking.month = new Date(booking.month.getFullYear(), booking.month.getMonth() + 1, 1)
    renderCalendar()
  })

  const confirmationFields = {
    species: document.querySelector('#confirmation-species'),
    name: document.querySelector('#confirmation-name'),
    age: document.querySelector('#confirmation-age'),
    reason: document.querySelector('#confirmation-reason'),
    date: document.querySelector('#confirmation-date'),
    time: document.querySelector('#confirmation-time'),
    owner: document.querySelector('#confirmation-owner'),
    phone: document.querySelector('#confirmation-phone'),
  }

  document.querySelector('#simulate-confirmation')?.addEventListener('click', () => {
    if (!validatePanel(3)) return
    if (!booking.date || !booking.time) {
      showAlert('Vuelve al paso de fecha y hora y selecciona una opción.')
      return
    }
    updateReview()
    Object.entries(confirmationFields).forEach(([key, node]) => {
      const source = document.querySelector(`[data-confirmation-source="${key}"]`)
      node.textContent = source?.textContent?.trim() || 'Sin indicar'
    })
    panels.forEach((panel) => { panel.hidden = true })
    document.querySelector('[data-stepper]').hidden = true
    confirmationPanel.hidden = false
    showAlert('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    confirmationPanel.querySelector('h1')?.focus({ preventScroll: true })
  })

  document.querySelector('#share-appointment')?.addEventListener('click', async () => {
    const summary = `Patitas Felices — solicitud de cita de demostración\nMascota: ${confirmationFields.species.textContent}${confirmationFields.name.textContent !== 'Sin indicar' ? `, ${confirmationFields.name.textContent}` : ''}\nMotivo: ${confirmationFields.reason.textContent}\nFecha: ${confirmationFields.date.textContent}, ${confirmationFields.time.textContent}\nEsta demo no reserva una cita real.`
    if (navigator.share) {
      try { await navigator.share({ title: 'Solicitud de cita · Patitas Felices', text: summary }) } catch { /* El usuario puede cancelar el panel de compartir. */ }
      return
    }
    try {
      await navigator.clipboard.writeText(summary)
      document.querySelector('#share-feedback').textContent = 'Resumen copiado para compartir.'
    } catch {
      document.querySelector('#share-feedback').textContent = 'Tu navegador no permite compartir desde esta página.'
    }
  })

  document.querySelector('#download-calendar')?.addEventListener('click', () => {
    if (!booking.date || !booking.time) return
    const [hour, minute] = booking.time.split(':').map(Number)
    const start = new Date(booking.date)
    start.setHours(hour, minute, 0, 0)
    const end = new Date(start.getTime() + 30 * 60 * 1000)
    const toUtcStamp = (date) => date.toISOString().replaceAll('-', '').replaceAll(':', '').replace(/\.\d{3}Z$/, 'Z')
    const ics = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Patitas Felices//Demo//ES', 'BEGIN:VEVENT',
      `DTSTART:${toUtcStamp(start)}`, `DTEND:${toUtcStamp(end)}`,
      'SUMMARY:Solicitud de cita de demostración — Patitas Felices',
      'DESCRIPTION:Evento de demostración. No representa una reserva real.',
      'END:VEVENT', 'END:VCALENDAR',
    ].join('\r\n')
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'solicitud-cita-demo.ics'
    link.click()
    URL.revokeObjectURL(url)
  })

  renderCalendar()
  renderTimes()
  updateReview()
  if (demoTimeZone) demoTimeZone.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone || 'hora local'
}
