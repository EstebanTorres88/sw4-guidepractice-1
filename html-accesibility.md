# Hallazgos de accesibilidad


**Autocompletado y facilitación de formularios:**
En el caso de que alguna persona esté haciendo una compra o registro rápido en el móvil mientras viaja en autobús, recomienda agregar el atributo `autocomplete` adecuado a cada input (`autocomplete="email"`, `autocomplete="tel"`, `autocomplete="cc-number"`). Esto permite que el navegador o gestor de contraseñas complete los datos en un solo toque sin requerir escritura manual.
    
&nbsp;

**Subtítulos y reproducción silenciosa de medios:**
    Cuando un usuario se encuentre viendo un video explicativo en un ambiente ruidoso o en un lugar silencioso sin auriculares, se recomienda incluir siempre subtítulos en videos mediante el elemento `<track>` y evitar activar el audio de fondo automáticamente (`autoplay`).
    

&nbsp;

&nbsp;

**Estructura y Regiones de Navegación (Landmarks)**

- **`<main>`**
    
  Se encarga de definir el contenido central y único del documento. Permite a los usuarios de lectores de pantalla saltar directamente al bloque principal de la página.
        
    - **Recomendaciones:** Debe existir solo un `<main>` visible por página. No debe colocarse como descendiente de `<header>`, `<nav>`, `<article>`, `<aside>` o `<footer>`.
        
- **`<nav>`**
    
   Delimita conjuntos de enlaces destinados a la navegación principal o secundaria del sitio.
        
    - **Recomendaciones:** Si incluyes más de un elemento `<nav>` en la misma página, diferencia cada uno mediante el atributo `aria-label` (por ejemplo, `aria-label="Menú principal"` y `aria-label="Pie de página"`).
        
- **`<header>` y `<footer>`**
    
  Agrupan contenido introductorio (cabecera) o información de cierre/pie de página (derechos de autor, enlaces a políticas).
        
    - **Recomendaciones:** Úsalos como regiones globales del sitio. Cuando se colocan dentro de un `<article>` o `<section>`, representan únicamente la cabecera o pie de ese bloque específico.
        
- **`<aside>`**
    
   Aloja información complementaria o tangencial al contenido principal (barras laterales, widgets, anuncios).
        
    - **Recomendaciones:** Evita colocar en un `<aside>` información que sea crítica para comprender el texto principal de la página.
        

**Encabezados e Interacción de Usuario**

- **`<h1>` a `<h6>`**
    
   Establecen la jerarquía del documento. Los usuarios de lectores de pantalla suelen navegar saltando entre encabezados para explorar la página.
        
    - **Recomendaciones:** Mantén siempre un orden secuencial (evita saltar de `<h1>` a `<h3>`). Utiliza solo un `<h1>` por página y no selecciones niveles de encabezado por cuestiones de tamaño visual (ajusta el estilo con CSS).
        
- **`<button>`**
    
   Activa acciones o scripts interactivos en la página. Recibe foco de teclado e interacción por defecto mediante las teclas `Enter` y `Espacio`.
        
    - **Recomendaciones:** No sustituyas `<button>` por un `<div>` o `<span>` con eventos de clic. Si la acción cambia la URL o navega a otra sección, usa `<a>`; para cualquier otra acción lógica, usa `<button>`.
        
- **`<a>`**
    
     Representa hipervínculos para navegar entre páginas o recursos.
        
    - **Recomendaciones:** El texto interno debe ser descriptivo por sí solo. Evita frases genéricas como "haz clic aquí" o "leer más". Si el enlace se abre en una pestaña nueva, indícalo explícitamente en el texto o con ayuda de texto oculto para lectores de pantalla.
        

**Formularios y Entradas de Datos**

- **`<label>`**
    
    Proporciona un nombre accesible a un control de formulario (`<input>`, `<select>`, `<textarea>`).
        
    - **Recomendaciones:** Vincula siempre la etiqueta al control mediante el atributo `for` haciendo coincidir exactamente el `id` del input (`<label for="email">` con `<input id="email">`). Evita depender únicamente del atributo `placeholder`.
        
- **`<fieldset>` y `<legend>`**
    
    Agrupan controles relacionados y les asignan un título contextualmente comprensible (por ejemplo, opciones de una encuesta o campos de dirección).
        
    - **Recomendaciones:** Esencial al agrupar botones de opción (`<input type="radio">`) o casillas de verificación (`<input type="checkbox">`), garantizando que la pregunta inicial descrita en `<legend>` sea anunciada en cada opción.
        

**Medios y Elementos Complejos**

- **`<img>` con `alt`**
    
  Transmite el significado o función de una imagen en texto para usuarios con discapacidad visual.
        
    - **Recomendaciones:** Incluye siempre el atributo `alt`. Si la imagen transmite información, describe su función o contenido sintéticamente. Si la imagen es puramente decorativa, utiliza un atributo vacío (`alt=""`) para que las tecnologías de asistencia la ignoren.
        
- **`<table>`, `<caption>`, `<th>` con `scope`**
    
  Estructuran datos tabulares de forma comprensible. `<caption>` titula la tabla y `<th>` junto con `scope` define si una celda encabeza una columna (`scope="col"`) o una fila (`scope="row"`).
        
    - **Recomendaciones:** Utiliza tablas únicamente para representar datos cuantitativos o estructurados, nunca para maquetar el diseño visual de la página.
        
- **`<dialog>`**
    
   Modales y ventanas emergentes nativas. Al activarse de forma nativa, atrapa el foco del teclado dentro del diálogo y permite cerrarlo con la tecla `Escape`.
        
    - **Recomendaciones:** Abre el elemento mediante el método JavaScript `.showModal()` en lugar de modificar clases CSS manualmente, asegurando así el comportamiento accesible integrado.
