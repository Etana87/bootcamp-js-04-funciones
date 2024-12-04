import "./style.css";

// VARIABLES
let turno: number = 0;

// ELEMENTOS
const numberDisplay = document.getElementById("number");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const turnoInput = document.getElementById("turnoInput");
const setTurnoButton = document.getElementById("setTurnoButton");

// FUNCIÓN ACTUALIZAR A DOS NÚMEROS
function actualizarDisplay() {
    if (numberDisplay && numberDisplay instanceof HTMLHeadingElement) {
        numberDisplay.innerText = turno.toString().padStart(2, "0");
    } else {
        console.error("actualizarDisplay: No se ha encontrado el elemento con id number");
    }
}
actualizarDisplay();

// CAMBIAR DE TURNO
// Botón "Siguiente"
nextButton?.addEventListener("click", () => {
    if (nextButton && nextButton instanceof HTMLButtonElement) {
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

// Cambiar turno
setTurnoButton?.addEventListener("click", () => {
    if (turnoInput && turnoInput instanceof HTMLInputElement) {
        const nuevoTurno = parseInt(turnoInput.value, 10);
        if (!isNaN(nuevoTurno) && nuevoTurno >= 0) {
            turno = nuevoTurno;
            actualizarDisplay();
        } else {
            console.error("setTurnoButton: no se ha encontrado el elemento id setTurnoButton.");
        }
    }
});