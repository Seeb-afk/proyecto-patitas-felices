# Patitas Felices — investigación UX

> Síntesis de la investigación inicial y las decisiones de estructura y dirección visual para el sitio web de la clínica veterinaria **Patitas Felices**. Incluye el análisis de competencia, las protopersonas y la simulación del *user journey map* de Camila y Thor.

## Alcance y criterios de interpretación

Este README reúne el contexto, los perfiles, las observaciones de competencia y las decisiones iniciales de diseño del proyecto. La información necesaria para entender esta investigación y su propuesta está incluida aquí; no es necesario consultar otros archivos del directorio.

Las protopersonas son perfiles hipotéticos y el *user journey map* es una simulación: no representan entrevistas, observación directa ni una prueba real con usuarios. El análisis de competencia resume observaciones de los sitios revisados, no una auditoría técnica independiente. Las inferencias y supuestos se identifican como tales; los datos que no estaban disponibles quedan pendientes de validación y no se presentan como hechos.

## Contexto del proyecto

Patitas Felices es una clínica veterinaria de barrio con ocho años de trayectoria. Actualmente sus clientes agendan por WhatsApp y teléfono. Los problemas identificados son la confusión con los horarios, las citas duplicadas y las consultas repetidas sobre precios, servicios y horario de emergencias.

El objetivo del sitio es ayudar a cualquier persona a informarse, confiar en la clínica y agendar una cita en menos de dos minutos, tanto desde celular como desde computadora.

### Requisitos del sitio

- Diseño **mobile-first** y adaptable a móvil y escritorio.
- Contraste accesible conforme a **WCAG AA** y consistencia visual entre pantallas.
- Acceso a **Emergencias** visible en todo momento.
- Estados de componentes contemplados: hover, activo, deshabilitado y error; también se recomienda un estado de foco visible para navegación con teclado.
- Prototipo navegable con el flujo de agendamiento completo.
- Pantallas contempladas: Inicio, Servicios, detalle de un servicio, Equipo, agendamiento en tres pasos, cita confirmada, Contacto y ubicación, y error 404.
- Servicios a mostrar: consulta, vacunación, cirugía, peluquería y emergencias, con precios referenciales cuando la clínica los confirme.

Como funciones adicionales posibles se consideran una sección **Mis mascotas** con historial de vacunas, modo oscuro, microinteracciones y pruebas de usabilidad con al menos dos personas. No forman parte del alcance inicial acordado, salvo que se decida incorporarlas después.

## Protopersonas

Los perfiles y tareas reflejan los datos disponibles para estas protopersonas. Las **expectativas** resumen sus necesidades explícitas; los datos no especificados se mantienen pendientes, sin inventar información personal.

### Mateo Gómez

- **Edad y ocupación:** 22 años; estudiante y diseñador freelance.
- **Mascota:** Milo, gato de seis meses; es su primera mascota.
- **Nivel tecnológico:** alto; nativo digital.
- **Expectativas descritas:** rapidez, inicio de sesión social e integración con calendarios.
- **Tarea:** registrarse, crear el perfil de Milo y agendar su primera vacuna.

### Don Roberto Martínez

- **Edad y ocupación:** 68 años; jubilado.
- **Mascotas:** Max (perro), Bella (perra) y Pelusa (gato).
- **Nivel tecnológico:** bajo; tiene dificultad con formularios complejos, letra pequeña y reglas estrictas de contraseñas.
- **Tarea:** registrarse, añadir a sus tres mascotas y agendar citas de desparasitación para todas.

### Camila Fernández

- **Edad y ocupación:** 34 años; gerente de proyectos.
- **Mascota:** Thor, Bulldog Francés de siete años con insuficiencia renal.
- **Nivel tecnológico:** intermedio-alto; orientada a la eficiencia.
- **Expectativas descritas:** agendamiento recurrente e historial médico para Thor.
- **Tarea:** registrarse, añadir a Thor con su condición médica y agendar un control periódico con su nefrólogo veterinario.

### Información pendiente de investigación

No se dispone de ciudad, dispositivos específicos, aplicaciones de uso diario, frases representativas, motivaciones detalladas, miedos individuales ni evidencia externa para respaldar supuestos sobre las protopersonas. Esos elementos quedan pendientes de investigación y no se presentan aquí como hechos.

## User journey map: Camila y Thor

### Escenario

> «Mi mascota amaneció decaída, no quiere comer y necesito llevarla al veterinario.»

Camila nota que Thor está decaído y no quiere comer. Dado que Thor tiene insuficiencia renal, ella busca orientación y atención veterinaria. La simulación asume que usa su celular para buscar una clínica y que necesita entender con rapidez cómo contactar o agendar.

**Nota:** el mapa refleja hipótesis de experiencia para orientar el diseño. No diagnostica la causa de los síntomas ni determina el nivel clínico de urgencia. La propuesta es facilitar el contacto directo con la clínica cuando la persona necesite orientación inmediata.

|  | **1. Detección** | **2. Búsqueda** | **3. Evaluación** | **4. Agendamiento** | **5. Confirmación** | **6. Post-cita** |
|---|---|---|---|---|---|---|
| **Acciones** | Nota que Thor está decaído y rechaza la comida. Recuerda su condición renal y busca atención. | Desde el celular, busca una clínica veterinaria cercana y abre el sitio de Patitas Felices. | Revisa servicios, experiencia del equipo, horarios, ubicación, precios y opiniones. | Intenta encontrar una cita pronta. Selecciona el servicio e informa los síntomas y la condición de Thor. | Comprueba los datos, guarda la confirmación y la comparte con alguien de confianza si lo necesita. | Asiste con Thor y sus antecedentes; después revisa las indicaciones y el seguimiento. |
| **Pensamientos** | «¿Podría estar relacionado con sus riñones? ¿Cuánto puedo esperar?» | «Necesito una clínica confiable que pueda orientarme pronto.» | «¿Atienden casos como el de Thor? ¿Cuánto costará? ¿Hay atención hoy?» | «¿Hay una hora cercana? ¿Puedo avisar que tiene insuficiencia renal?» | «¿La cita quedó confirmada? ¿Qué información debo llevar?» | «¿Tienen presente su historial? ¿Qué debo vigilar y cuándo es el próximo control?» |
| **Emociones** | 😟 Preocupación alta al notar los síntomas. | 😰 Ansiedad e incertidumbre mientras busca atención. | 😕 Cautela mientras evalúa si la clínica inspira confianza y puede atenderla. | 😣 Impaciencia si no encuentra horario; alivio si logra reservar pronto. | 🙂 Alivio al recibir una confirmación clara. | 😌 Más tranquilidad si recibe seguimiento; inquietud si no sabe qué hacer después. |
| **Puntos de contacto** | Thor, observación en casa, historial médico y celular. | Buscador, resultados locales y sitio web. | Sitio web: servicios, equipo, precios, horarios, ubicación y reseñas. | Formulario o sistema de citas; teléfono o WhatsApp como alternativa. | Pantalla de confirmación y canal de contacto indicado por la clínica. | Clínica física, indicaciones y contacto posterior de la clínica. |
| **Puntos de dolor** | No sabe si debe buscar orientación inmediata ni qué información preparar. | Puede costarle hallar rápidamente el contacto, el horario o la ubicación. | Puede no encontrar información sobre servicios, precios, atención disponible o experiencia del equipo. | Formulario largo, falta de horarios disponibles o imposibilidad de mencionar la condición de Thor. | Confirmación sin resumen, instrucciones ni datos de contacto; duda sobre si la cita se registró. | Tener que repetir el historial, perder indicaciones o no saber cómo coordinar el siguiente control. |
| **Oportunidades de diseño** | Mantener visible **Emergencias / Contactar ahora** y facilitar el contacto directo, sin intentar diagnosticar desde el sitio. | Presentar claramente teléfono, WhatsApp, ubicación y horario en la página y en los resultados locales. | Hacer visibles los servicios, el equipo y sus especialidades, precios referenciales, horarios y disponibilidad. | Diseñar un flujo breve, mobile-first, que permita indicar condición médica y síntomas; si no hay horario conveniente, ofrecer contacto directo. | Mostrar resumen de cita, dirección, contacto y qué llevar; permitir añadir al calendario o compartir la confirmación. | Facilitar el acceso al historial e indicaciones de Thor y la coordinación de controles futuros. |

### Curva emocional

**Preocupación → ansiedad durante la búsqueda → cautela al evaluar → frustración o alivio al agendar → tranquilidad con una confirmación clara → confianza si existe seguimiento.**

La curva emocional es una representación cualitativa de la simulación, no una medición de una prueba con usuarios.

## Análisis de competencia

Se analizaron dos sitios. Las observaciones siguientes resumen la revisión de sus páginas y experiencia móvil; no constituyen una auditoría técnica independiente.

| Criterio | Tu Mundo Veterinario | Bond Vet |
|---|---|---|
| Sitio analizado | Tu Mundo Veterinario — tumundoveterinario.com | Bond Vet — bondvet.com |
| Claridad inicial | Se entiende que trata sobre servicios veterinarios, aunque funciona principalmente como directorio de establecimientos en Venezuela. | La propuesta no se entiende del todo al primer vistazo; la imagen y el contenido al desplazarse ayudan a aclararla. |
| Cómo se agenda | Servicios → clínicas veterinarias → buscar una clínica cercana → contactar por WhatsApp. La cita se coordina fuera del sitio. | Botón **Book Now** → estado y ciudad → fecha y hora → datos de contacto. |
| Servicios y precios | No muestra precios y el detalle de servicios es limitado. | Muestra servicios, pero no precios antes de reservar. |
| Emergencias, horarios y ubicación | Muestra horarios y ubicación, pero no ofrece una vía específica de emergencia. | No presenta una vía específica de emergencia; el chat informa horarios y la ubicación se encuentra durante la reserva. |
| Experiencia móvil | Funciona bien en teléfono, aunque se observaron detalles de tamaño en tipografía del menú y algunos botones. | Se evaluó como muy buena en teléfono y con una reserva fácil de encontrar. |
| Identidad visual | Azul marino, turquesa y tonos claros; tipografía sans-serif legible e imágenes de mascotas y veterinarios. | Fondo cálido claro, azul marino, verde menta y coral para destacar **Book Now**; tipografía sans-serif geométrica e imágenes de atención veterinaria. |
| Fortalezas y fricciones | Buena claridad funcional, contacto rápido y datos agrupados en tarjetas; la cita no se completa interactivamente en el sitio. | Diseño cuidado y flujo de reserva sencillo; la propuesta inicial, los horarios y los precios podrían ser más claros antes de reservar. |

### Aprendizajes para Patitas Felices

- Adoptar una propuesta de valor evidente desde el primer pantallazo, un CTA de reserva prominente y contacto directo por WhatsApp o teléfono.
- Mostrar horarios, ubicación, servicios y precios referenciales sin obligar a iniciar una reserva para encontrarlos.
- Dar al flujo de cita continuidad dentro del sitio, con disponibilidad clara y confirmación final.
- Mantener una vía de emergencias visible en todo momento; no depender solo del chat o de una sección difícil de localizar.
- Evitar un hero ambiguo, botones con tamaños inconsistentes y texto pequeño en navegación móvil.

## Dirección visual acordada

La dirección será **moderna y clínica**, con una sensación profesional y limpia, pero no fría. La paleta inicial acordada combina teal y verde suave con neutros claros:

| Uso propuesto | Color |
|---|---|
| CTA principal, enlaces y elementos de marca | Teal `#0F766E` con texto blanco |
| Títulos | Teal oscuro `#134E4A` |
| Fondos suaves y tarjetas destacadas | Verde suave `#E6F4EA` |
| Fondo general | Blanco verdoso `#F8FAF9` |
| Texto principal | Gris oscuro `#243431` |
| Emergencias | Rojo `#B42318`, reservado para la acción urgente |

Estos valores son una propuesta inicial y deben verificarse en los componentes finales para mantener contraste WCAG AA. Se priorizarán tipografía sans-serif legible, espacio en blanco, tarjetas sencillas e imágenes profesionales de veterinarios atendiendo mascotas. Se evitarán ilustraciones infantiles, decoración recargada y fotos genéricas que no transmitan atención clínica.

## Estructura propuesta para la página principal

1. **Encabezado:** logo, enlaces a Inicio, Servicios, Equipo y Contacto, más CTA **Agendar cita**.
2. **Hero:** fotografía profesional, mensaje que explique de inmediato la atención veterinaria y botón **Agendar cita**; el acceso a emergencias se mantiene claramente diferenciado.
3. **Servicios destacados:** tarjetas de consulta, vacunación, cirugía y peluquería, con precios referenciales cuando la clínica los proporcione.
4. **Confianza:** trayectoria de ocho años y presentación del equipo veterinario.
5. **Testimonios:** incluir testimonios reales y verificables; no inventar reseñas.
6. **Contacto práctico:** ubicación, horarios, teléfono y WhatsApp.
7. **Footer:** enlaces principales e información de contacto.

**Copy inicial para el hero:** «Atención veterinaria profesional, con el cuidado cercano que tu mascota merece». Es una propuesta de contenido pendiente de validación con la clínica.

## Sitemap propuesto

El menú principal tiene cuatro opciones. **Agendar cita** es un CTA destacado y **Emergencias** permanece accesible globalmente, en lugar de quedar escondida en el menú.

```text
Nivel 0
└── Inicio
    ├── Nivel 1: Servicios
    │   ├── Consulta
    │   ├── Vacunación
    │   ├── Cirugía
    │   ├── Peluquería
    │   ├── Emergencias
    │   └── Detalle de servicio (plantilla; al menos una página detallada)
    ├── Nivel 1: Equipo
    │   └── Veterinarios y especialidades
    ├── Nivel 1: Contacto y ubicación
    │   ├── Dirección y mapa
    │   ├── Horarios
    │   └── Información de emergencias
    └── CTA global: Agendar cita
        ├── Paso 1: elegir servicio y registrar mascota
        ├── Paso 2: elegir fecha y hora disponibles
        ├── Paso 3: datos del dueño y revisión de la cita
        └── Cita confirmada

Página 404: enlace para volver al inicio, consultar servicios o agendar.
Elementos globales: encabezado, footer y acceso persistente a Emergencias.
```

**Navegación principal:** Inicio · Servicios · Equipo · Contacto. El footer incluye enlaces principales y datos de contacto. Las páginas importantes quedan a un máximo de dos clics desde Inicio; el detalle de un servicio se alcanza en tres.

**Alcance de la primera versión:** incluye el registro de la mascota dentro del paso 1 del agendamiento. **Mis mascotas**, historial médico y gestión de controles recurrentes quedan como una posible fase posterior: son relevantes para Camila, pero aparecen como opcionales en el enunciado y amplían el alcance inicial.

## Flujo para agendar una cita

El flujo se inspira en la claridad del agendamiento de Bond Vet, adaptado a una sola clínica: no se pide elegir sede, ciudad ni crear una cuenta. La meta es completarlo en menos de dos minutos, con pocos campos y sin perder la información al volver a un paso anterior.

### 0. Acceso a emergencias

El acceso **Emergencias** se mantiene visible durante el proceso y ofrece contacto directo por llamada o WhatsApp. Si la persona indica que necesita atención de emergencia, se la deriva a esos canales; no se le obliga a terminar el formulario habitual ni se intenta diagnosticar desde el sitio.

### 1. Mascota y motivo

- **Especie:** perro, gato, ave, conejo/roedor, reptil u otro.
- **Nombre de la mascota:** opcional.
- **Edad:** opcional; si se proporciona, indicar años o meses.
- **Motivo de la cita:** consulta general, vacunación, desparasitación, peluquería, evaluación para cirugía, control/seguimiento u otro.
- Campo opcional para describir brevemente síntomas o una condición médica relevante.
- Si elige **Otro**, se habilita un campo para especificar el motivo.

### 2. Fecha y hora

- Calendario con fechas y horarios realmente disponibles.
- Las fechas y horas que aparecen en el wireframe son ilustrativas; no representan disponibilidad real.
- La persona elige un horario y puede revisar el resumen de mascota y motivo.
- Si un horario deja de estar disponible, se informa claramente, se actualizan las opciones y se conserva lo ya ingresado.
- No se solicita ubicación de la clínica, porque el proyecto contempla una sola sede.

### 3. Datos del tutor y revisión

- **Nombre del tutor** y **teléfono** obligatorios; no se exige correo ni registro de cuenta.
- Resumen de mascota, motivo, fecha y hora antes de confirmar.
- La navegación para volver al paso anterior conserva los datos ingresados.
- El aviso de privacidad y su texto legal deberán validarse con la clínica antes de publicar el formulario.

### 4. Cita confirmada

Mostrar un mensaje de confirmación con el resumen de la cita, los datos de contacto, la dirección y cualquier instrucción que la clínica confirme. Incluir acciones para **añadir al calendario** y **compartir por WhatsApp**. Dirección, horarios y demás instrucciones permanecen como contenido pendiente hasta ser proporcionados.

### Validación y estados

- Marcar especie, motivo, nombre del tutor y teléfono como obligatorios; nombre y edad de la mascota son opcionales. Validar el teléfono con un mensaje claro junto al campo.
- Mostrar estados de error sin borrar datos; conservarlos también al retroceder.
- Mostrar disponibilidad actualizada y permitir escoger otro horario si el seleccionado ya no está libre.
- Mantener acceso a emergencias visible en las pantallas del flujo.

El diseño detallado de las pantallas de este flujo queda pendiente de validación con la clínica. Los precios, el horario operativo, el teléfono, la disponibilidad real y el aviso de privacidad no se deben inventar.

## Mapa de calor heurístico del agendamiento

[Ver mapa visual del flujo (SVG)](./heatmap-agendar.svg).

El mapa estima dónde podría concentrarse la atención de cada protopersona al completar los pasos de la cita. **Es una hipótesis de diseño, no un heatmap de seguimiento ocular ni un resultado de una prueba con participantes.** Se basa únicamente en los perfiles descritos y en las pantallas propuestas. “Alta”, “media” y “baja” expresan atención relativa esperada, no una métrica ni una puntuación de usabilidad.

| Protopersona | 1. Mascota y motivo | 2. Fecha y hora | 3. Datos y revisión | 4. Confirmación |
|---|---|---|---|---|
| **Mateo** | **Alta:** especie y motivo de vacunación; querrá avanzar rápido sin crear cuenta. | **Alta:** localizar una fecha y hora disponible sin pasos innecesarios. | **Media:** completar nombre y teléfono; valora que no se le pida registrarse. | **Alta:** guardar la cita en el calendario o compartirla. |
| **Don Roberto** | **Alta:** reconocer la especie, el motivo de desparasitación y qué campos son obligatorios u opcionales. | **Alta:** leer el calendario, diferenciar horarios disponibles y seleccionar sin errores. | **Alta:** completar el teléfono, entender la validación y poder volver sin perder datos. | **Alta:** reconocer que terminó y encontrar dirección e instrucciones. |
| **Camila** | **Alta:** seleccionar control/seguimiento y añadir la condición médica de Thor. | **Alta:** encontrar una fecha conveniente y confirmar disponibilidad del especialista. | **Alta:** verificar los datos de contacto y que la información clínica relevante se conserve. | **Alta:** revisar el resumen e indicaciones; buscar opciones de seguimiento. |

### Resultados e implicaciones

- **Foco compartido:** motivo, disponibilidad de fecha/hora y claridad de la confirmación concentran atención en las tres simulaciones.
- **Don Roberto:** la legibilidad del calendario y la distinción entre campos requeridos y opcionales son puntos críticos. Su tarea incluye tres mascotas, pero el flujo actual permite solicitar una por vez; completar la tarea exigiría repetirlo.
- **Camila:** la nota médica se captura en el paso 1, pero no aparece en el resumen de revisión/confirmación. Esa discontinuidad puede hacer que dude si la clínica recibirá el contexto de Thor. El flujo tampoco permite elegir especialista ni programar controles recurrentes; el historial está fuera del alcance inicial.
- **Mateo:** el acceso sin cuenta reduce pasos y responde a su búsqueda de rapidez; añadir al calendario y compartir el resumen son los focos más probables al finalizar.
- **Hallazgo operativo común:** el botón de Emergencias es visible, pero el teléfono y horario reales siguen sin configurarse. Hasta disponer de esos datos, no ofrece contacto urgente efectivo.

### Cambios sugeridos para validar

1. Usar texto legible, etiquetas explícitas y controles táctiles cómodos; comprobar especialmente el calendario desde móvil y para baja habilidad digital.
2. Conservar en el resumen final la nota opcional de síntomas/condición médica, o explicar claramente qué información recibe la clínica.
3. Añadir una alternativa para agendar varias mascotas o aclarar que se requiere una solicitud por mascota.
4. Configurar disponibilidad y contacto real de emergencias antes de publicar; los horarios actuales de la demo no son reales.
5. Evaluar en una fase posterior los controles recurrentes, el historial médico y la selección de especialista para perfiles como Camila.

Estos resultados sirven para orientar la siguiente iteración, pero deben contrastarse con pruebas de usabilidad reales antes de considerarlos hallazgos validados.

## Oportunidades de diseño derivadas

1. Mantener un acceso visible a **Emergencias / Contactar ahora** en todas las páginas, con opciones directas de llamada o WhatsApp.
2. Hacer fáciles de encontrar los servicios, horarios, ubicación y precios referenciales para reducir preguntas repetidas.
3. Procurar que el flujo de citas sea breve y permita registrar información relevante sobre la mascota, incluidas condiciones médicas.
4. Confirmar la cita con un resumen claro y opciones para guardar o compartir la información.
5. Considerar el historial médico y la programación de controles recurrentes para mascotas con condiciones crónicas.
6. Diseñar formularios accesibles y simples, con textos legibles y mensajes claros cuando haya errores o no exista disponibilidad.

Estas oportunidades son recomendaciones iniciales derivadas del enunciado y de la simulación; deben validarse con usuarios y con la clínica antes de implementarse.

## Aplicación web de demostración

La demo se construye con **pnpm**, **Vite**, **Tailwind CSS**, JavaScript vanilla y HTML semántico. El diseño es mobile-first; incluye Inicio, Servicios, detalle de consulta, Equipo, Contacto, el flujo de cita y una página 404. La hoja de estilos se enlaza desde el `<head>` para evitar un primer pintado sin CSS; donde el navegador lo soporte, las navegaciones entre páginas usan View Transitions y respetan `prefers-reduced-motion`.

### Ejecutar localmente

```bash
pnpm install
pnpm dev
```

Para generar y previsualizar la versión de producción:

```bash
pnpm build
pnpm preview
```

### Alcance de la demo

- El flujo permite ingresar mascota y motivo, seleccionar fechas y horarios de ejemplo, revisar los datos y ver un resumen final.
- Especie, motivo, nombre del tutor y teléfono son obligatorios. Nombre y edad de la mascota son opcionales.
- Los datos se mantienen solamente en memoria mientras la página está abierta. **No se envían a la clínica, no se almacenan y no se crea una reserva real.** Si la persona elige compartir el resumen, el navegador lo pasa al panel de compartir del dispositivo; el evento de calendario se descarga solo bajo petición.
- Las fechas, horarios y acciones de compartir/añadir al calendario son demostrativos. Dirección, teléfono, precios, horarios de la clínica, equipo y testimonios deben confirmarse antes de publicar.
- Las páginas están preparadas para `https://mi-dominio.com`; sustituir ese dominio en canonical, Open Graph, `public/robots.txt` y `public/sitemap.xml` al definir el dominio definitivo.

### SEO y despliegue

`public/robots.txt` permite rastrear las páginas públicas y anuncia el sitemap XML. El sitemap contiene solo las páginas previstas; el flujo final de la demo se muestra como un estado de `agendar.html`, no como una URL que almacene datos personales. Los metadatos y las URL canónicas están definidos por página.

El archivo `public/_headers` usa el formato de configuración de encabezados de algunos hostings estáticos, como Cloudflare Pages y Netlify. **No es configuración universal**: verificar que el hosting realmente la aplique. HSTS solo es efectivo sobre HTTPS. No añadir `includeSubDomains` ni `preload` hasta confirmar que todos los subdominios pertinentes operan correctamente con HTTPS.

### Límites y medidas de seguridad

- **Rate limit:** no está implementado porque esta demo estática no tiene un endpoint de reservas. En producción debe aplicarse en el servidor, API o edge/WAF, además de límites de tamaño y protección antispam.
- **HTML injection / XSS:** los valores del formulario se tratan como texto (`textContent`); no se insertan como HTML. La validación del navegador mejora la experiencia, pero no sustituye la validación y codificación en un backend.
- **HSTS y encabezados:** la demo propone HSTS, CSP, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` y `Permissions-Policy` mediante `_headers`. Confirmar su presencia con el hosting y probar que CSP no bloquee recursos necesarios.
- **Datos personales:** no guardar datos de tutor o mascota en `localStorage`, `sessionStorage` ni logs. Para reservas reales, definir aviso de privacidad, retención y acceso a los datos; proteger el endpoint y usar HTTPS.
- **Antes de producción:** integrar disponibilidad y reservas del servidor, rate limit, validación del teléfono y de todos los campos en servidor, controles de abuso, gestión segura de secretos, protección CSRF si se usan cookies de sesión y una política CORS restrictiva si existe una API separada.
- **Accesibilidad y calidad:** validar contraste WCAG AA, foco y navegación por teclado, movimiento reducido, etiquetas/errores de formularios y layout en anchos estrechos (incluido 320 px) además de móvil y escritorio.

Los datos de contacto y negocio deben confirmarse antes de añadir datos estructurados locales (por ejemplo, `VeterinaryCare`) o habilitar acciones reales de emergencia.

### Atribución de fotografías

La fotografía local `public/images/veterinario-atendiendo-perro.webp` se descargó de Wikimedia Commons y se optimizó a WebP para la página principal. Autor: **Nenad Stojkovic**. Licencia: [Creative Commons Attribution 2.0 (CC BY 2.0)](https://creativecommons.org/licenses/by/2.0/). [Archivo original y detalles de atribución](https://commons.wikimedia.org/wiki/File:Close-up_of_a_veterinarian_examining_a_maltese_dog_with_a_stethoscope._(51687314898).jpg). La atribución aparece junto a la foto en Inicio.

La imagen de fondo en Servicios, `public/images/duenia-con-mascota.webp`, muestra a una mujer jugando con su perro. Autor: **Jorge Royan**. La versión WebP y el encuadre se adaptaron para la página; la imagen y su adaptación se distribuyen bajo [Creative Commons Attribution-ShareAlike 3.0 (CC BY-SA 3.0)](https://creativecommons.org/licenses/by-sa/3.0/). [Archivo original en Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Berlin-_A_woman_playing_with_her_dog_in_Bebelplatz_-_3822.jpg). El crédito aparece dentro de la parte inferior de la sección.

La imagen de la sección de equipo en Inicio, `public/images/equipo-veterinario-atendiendo-perro.webp`, muestra una consulta veterinaria y es ilustrativa; no representa al personal de la clínica. Fuente: fotografía de la U.S. Navy, **dominio público**. [Archivo y contexto en Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Defense.gov_photo_essay_110706-N-KB563-290.jpg). La fuente se acredita en el pie de la imagen.
