🍽️ Menú Digital - Restaurante
Página web responsiva para mostrar el menú de un restaurante

Este es un proyecto sencillo pero funcional que muestra el menú de un restaurante con navegación por secciones, diseño responsivo y datos cargados dinámicamente desde un archivo JSON. Ideal para pequeños negocios o como plantilla base para proyectos más avanzados.

Visita la demo

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
├── index.html          # Estructura principal del sitio
├── style.css           # Estilos CSS responsivos
├── script.js           # Lógica para cargar el menú dinámicamente
├── menu.json           # Datos del menú (platos, precios, descripciones)
└── README.md           # Documentación del proyecto (este archivo)
🔧 Tecnologías Utilizadas
HTML5
Estructura semántica
CSS3
Diseño y estilos responsivos
JavaScript
Carga dinámica del menú
JSON
Almacenamiento de los datos del menú

✨ Características Principales
✅ Diseño completamente responsivo
✅ Navegación con slider horizontal en móviles
✅ Secciones: Platos, Sandwich, Acompañantes y Bebidas
✅ Contenido dinámico desde menu.json
✅ Scroll suave hacia cada sección
✅ Banner con logo personalizable
✅ Footer con información de contacto
🚀 Cómo Ejecutar el Proyecto
1. Clona este repositorio:
bash


1
git clone https://github.com/tu-usuario/restaurante-menu.git
2. Abre el archivo index.html en tu navegador:
bash


1
2
cd restaurante-menu
open index.html
No necesitas servidor local ni instalación adicional. ¡Funciona al instante! 

🛠️ Cómo Personalizar el Proyecto
Cambiar el logo del restaurante
Edita esta línea en index.html:

html


1
<img src="https://via.placeholder.com/300x100?text=LOGO+RESTAURANTE" alt="Logo del Restaurante">
Reemplázalo con tu propio logo (SVG o PNG):

html


1
<img src="imagenes/logo-restaurante.svg" alt="Nombre del Restaurante">
Agregar nuevos platos o categorías
Modifica el archivo menu.json:

json


1
2
3
4
5
6
7
8
9
⌄
⌄
⌄
{
  "platos": [
    {
      "nombre": "Nuevo Plato",
      "descripcion": "Descripción breve del nuevo plato.",
      "precio": "$19.000"
    }
  ]
}
📷 Captura de Pantalla


Puedes agregar una captura real del proyecto cuando lo publiques o compartas. 

💬 ¿Tienes dudas?
Si tienes alguna pregunta, quieres mejorar el proyecto o deseas integrar carrito, búsqueda o conexión a base de datos, no dudes en crear una Issue o contactarme directamente.

🤝 Contribuir
¡Toda ayuda es bienvenida!
Si quieres contribuir a este proyecto, sigue estos pasos:

Haz un fork del repositorio
Crea una rama nueva: git checkout -b feature/nueva-funcion
Haz tus cambios y haz commit: git commit -m 'Agrega nueva función'
Sube los cambios: git push origin feature/nueva-funcion
Crea un Pull Request
