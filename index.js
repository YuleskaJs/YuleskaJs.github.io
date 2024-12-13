document.addEventListener("DOMContentLoaded", () => {
    const images = ["carro1.jpeg", "carro2.jpeg", "carro3.jpeg"]; // Lista de imágenes
    let currentIndex = 0; // Índice actual

    const imageElement = document.getElementById("dynamic-image");

    // Cambiar imagen cada 2 segundos
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length; // Avanzar al siguiente índice
        imageElement.src = images[currentIndex]; // Cambiar el atributo src
    }, 2000); // 2000ms = 2 segundos
});
