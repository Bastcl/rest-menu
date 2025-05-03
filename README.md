🍽️ Menú Digital - Restaurante
Página web responsiva que muestra el menú de un restaurante con navegación por secciones, slider horizontal en móvil y datos dinámicos cargados desde un archivo JSON.

📁 Estructura del Proyecto


1
2
3
4
5
6
7
/restaurante-menu/
│
├── index.html          ← Estructura principal del sitio
├── style.css           ← Estilos CSS responsivos
├── script.js           ← Lógica para cargar menú dinámico
├── menu.json           ← Datos del menú (platos, precios, descripciones)
└── README.md           ← Documentación del proyecto (este archivo)
🧾 Descripción
Este es un menú digital simple y moderno diseñado para restaurantes. Incluye:

✅ Banner con logo del restaurante (responsivo).
✅ Navegación con slider horizontal en móviles.
✅ Secciones dinámicas: Platos, Sandwich, Acompañantes y Bebidas.
✅ Carga de contenido desde un archivo menu.json.
✅ Diseño totalmente responsivo.
✅ Footer profesional al final de la página.
🌐 Características Principales
Responsive Design
✅
Slider Horizontal (móvil)
✅
Datos Dinámicos (JSON)
✅
Scroll Suave a Secciones
✅
Centrado de Contenido
✅
Footer Responsivo
✅

🔧 Tecnologías Usadas
HTML5 – Para la estructura semántica.
CSS3 – Estilizado y diseño responsivo.
JavaScript – Para cargar los datos del menú dinámicamente.
JSON – Archivo externo para almacenar los ítems del menú.
🚀 Cómo Ejecutar el Proyecto
Descarga o clona este repositorio:
bash


1
git clone https://github.com/tu-usuario/restaurante-menu.git
Abre el proyecto en tu editor favorito (VSCode, Sublime, etc.).
Ábrelo directamente en el navegador:
bash


1
index.html
¡Listo! El menú ya está funcionando.
No se requiere servidor local ni instalación adicional para probarlo. 

📝 Cómo Agregar Más Elementos
Para agregar más platos u opciones al menú:

Edita el archivo menu.json.
Añade objetos nuevos dentro de las categorías (platos, sandwich, etc.).
Guarda y recarga la página. Los cambios aparecerán automáticamente.
Ejemplo:
json


1
2
3
4
5
⌄
{
  "nombre": "Nuevo Plato",
  "descripcion": "Descripción breve del nuevo plato.",
  "precio": "$19.000"
}
📷 Logo del Restaurante
El logo actual es un placeholder. Puedes reemplazarlo en esta línea de index.html:

html


1
<img src="https://via.placeholder.com/300x100?text=LOGO+RESTAURANTE" alt="Logo del Restaurante">
Recomendación:

Usa un archivo SVG para mejor calidad.
Si usas PNG/JPG, dimensiones ideales: 300px x 120px.
💡 Consejos Adicionales
✅ Usa SVG para logotipos y gráficos.
✅ Optimiza imágenes con herramientas como TinyPNG o Squoosh .
✅ Si planeas conectarlo a una base de datos, puedes usar APIs REST y reemplazar fetch('menu.json') por la URL correspondiente.
