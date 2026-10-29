const menuButton = document.querySelector('[data-menu-button]')
const mobileMenu = document.querySelector('[data-mobile-menu]')

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true'
    menuButton.setAttribute('aria-expanded', String(!expanded))
    mobileMenu.dataset.open = String(!expanded)
    mobileMenu.hidden = expanded
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu.dataset.open === 'true') {
      menuButton.setAttribute('aria-expanded', 'false')
      mobileMenu.dataset.open = 'false'
      mobileMenu.hidden = true
      menuButton.focus()
    }
  })
}

document.querySelectorAll('[data-current-year]').forEach((node) => {
  node.textContent = String(new Date().getFullYear())
})
