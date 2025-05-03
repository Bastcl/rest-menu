document.addEventListener("DOMContentLoaded", () => {
    fetch('menu.json')
        .then(response => {
            if (!response.ok) throw new Error("Error al cargar el menú");
            return response.json();
        })
        .then(data => {
            renderizarSeccion("platos", data.platos);
            renderizarSeccion("sandwich", data.sandwich);
            renderizarSeccion("acompanantes", data.acompanantes);
            renderizarSeccion("bebidas", data.bebidas);
        })
        .catch(error => {
            console.error("Hubo un problema:", error);
        });
});

function renderizarSeccion(seccionId, items) {
    const container = document.getElementById(`${seccionId}-container`);
    if (!container) return;

    items.forEach(item => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.innerHTML = `
            <h3>${item.nombre}</h3>
            <p>${item.descripcion}</p>
            <div class="price">${item.precio}</div>
        `;
        container.appendChild(div);
    });
}

// Mostrar/ocultar el botón y funcionalidad para subir al tope
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'flex';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});