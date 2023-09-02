const botonSiguiente = document.getElementById("siguiente");
const viñetas = document.querySelectorAll(".comic-frame");
let indiceActual = 0;

botonSiguiente.addEventListener("click", () => {
    // Oculta la viñeta actual
    viñetas[indiceActual].style.display = "none";
    
    // Incrementa el índice y muestra la siguiente viñeta
    indiceActual++;
    if (indiceActual >= viñetas.length) {
        indiceActual = 0; // Vuelve al inicio si llegamos al final
    }
    viñetas[indiceActual].style.display = "block";
});
