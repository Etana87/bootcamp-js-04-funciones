import "./style.css";

// VARIABLES
let turno: number = 0;

// ELEMENTOS
const numberDisplay = document.getElementById("number");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

//FUNCIÓN ACTUALIZAR A DOS NÚMEROS
function actualizarDisplay() {
    if (numberDisplay && numberDisplay instanceof HTMLButtonElement) {
        numberDisplay.innerText = turno.toString().padStart(2, "0");
    } else {
        console.error("actualizarDisplay: No se ha encontrado el elemento con id number");
        } 
   }

//CAMBIAR DE TURNO
// Botón "Siguiente"
nextButton?.addEventListener("click", () => {
    if(nextButton && nextButton instanceof HTMLHeadingElement) {
        turno++;
        actualizarDisplay();
    } else {
        console.error("nextButton: No se ha encontrado el elemento con id nextButton");
    }
});
  
// Botón "Anterior"
prevButton?.addEventListener("click", () => {
    if (prevButton && prevButton instanceof HTMLButtonElement) {
        if (turno > 0) {
            turno--;
            actualizarDisplay();
        }
    } else {
        console.error("prevButton: No se ha encontrado el elemento con id prevButton");
    }
});

