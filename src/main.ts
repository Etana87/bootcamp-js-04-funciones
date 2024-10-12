import "./style.css";

// VARIABLES
let turno: number = 0;

// ELEMENTOS
const numberDisplay = document.getElementById("number") as HTMLButtonElement;
const prevButton = document.getElementById("prevButton") as HTMLButtonElement;
const nextButton = document.getElementById("nextButton") as HTMLButtonElement;

//FUNCIÓN ACTUALIZAR A DOS NÚMEROS
function actualizarDisplay() {
     numberDisplay.innerText = turno.toString().padStart(2, "0");
   }

//CAMBIAR DE TURNO
// Botón "Siguiente"
nextButton.addEventListener("click", () => {
    turno++;
    actualizarDisplay();
});
  
// Botón "Anterior"
prevButton.addEventListener("click", () => {
    if (turno > 0) {
        turno--;
        actualizarDisplay();
    }
});

