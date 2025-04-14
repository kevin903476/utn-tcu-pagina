// Definir el número máximo de hojas según el dispositivo
const MAX_LEAVES = window.innerWidth < 768 ? 9 : 13;
const spawnRate = window.innerWidth < 768 ? 1000 : 800; // En móviles, se generan más lento

function createLeaf() {
    // Obtener el contenedor de hojas
    const container = document.getElementById('leaf-container');
    
    // Si no existe el contenedor, salir
    if (!container) return;
    
    // Si ya hay el número máximo de hojas, eliminar la más antigua
    if (container.querySelectorAll(".leaf").length >= MAX_LEAVES) {
        container.querySelector(".leaf").remove();
    }

    const leaf = document.createElement("img");
    leaf.src = "../images/flor.svg"; 
    leaf.classList.add("leaf");
    container.appendChild(leaf); // Añadir al contenedor, no al body
    
    const startPosX = Math.random() * container.offsetWidth;
    const duration = window.innerWidth < 768 ? Math.random() * 12 + 6 : Math.random() * 10 + 5;
    const size = window.innerWidth < 768 ? Math.random() * 10 + 10 : Math.random() * 12 + 12;

    leaf.style.left = `${startPosX}px`;
    leaf.style.top = "0"; // Empieza desde la parte superior del contenedor
    leaf.style.width = `${size}px`;
    leaf.style.height = `${size}px`;
    leaf.style.animationDuration = `${duration}s`;

    setTimeout(() => {
        leaf.remove();
    }, duration * 1000);
}

// Iniciar la generación de hojas cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Genera una nueva hoja en intervalos diferentes según el dispositivo
    setInterval(createLeaf, spawnRate);
    
    // Crea algunas hojas iniciales
    for (let i = 0; i < MAX_LEAVES / 2; i++) {
        createLeaf();
    }
});