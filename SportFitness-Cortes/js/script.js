// Objeto para almacenar las rutinas 
const rutinas = {
    joven: ["Saltar la cuerda", "Correr 30 minutos", "Hacer 20 flexiones"],
    adulto: ["Nadar 20 minutos", "Hacer 30 sentadillas", "Yoga durante 15 minutos"],
    mayor: ["Caminar 30 minutos", "Estiramientos suaves", "Hidratación adecuada"]
};

// Función para obtener la rutina de entrenamiento desde el archivo JSON
function obtenerRutinaDesdeJSON() {
    return fetch('rutinas.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el archivo JSON.');
            }
            return response.json();
        });
}

// Función para mostrar la rutina en el DOM
function mostrarRutina(rutina) {
    const rutinaList = document.getElementById("rutina-list");
    rutinaList.innerHTML = "";

    rutina.forEach(ejercicio => {
        const li = document.createElement("li");
        li.textContent = ejercicio;
        rutinaList.appendChild(li);
    });
}

// Event listener para el botón "Obtener Rutina"
const obtenerRutinaButton = document.getElementById("obtenerRutina");
obtenerRutinaButton.addEventListener("click", () => {
    obtenerRutinaDesdeJSON()
        .then(data => {
            const edadInput = document.getElementById("edad");
            const edad = parseInt(edadInput.value);

            let tipoRutina = "joven";

            if (edad >= 18 && edad < 40) {
                tipoRutina = "adulto";
            } else if (edad >= 40) {
                tipoRutina = "mayor";
            }

            const rutina = data[tipoRutina];
            mostrarRutina(rutina);
        })
        .catch(error => {
            console.error("Error al obtener la rutina:", error);
        });
});

// Cuando se hace clic en el botón "Obtener Rutina"
$('#obtenerRutina').click(function() {
    const edadInput = $('#edad');
    const edad = parseInt(edadInput.val());

    let tipoRutina = "joven";

    if (edad >= 18 && edad < 40) {
        tipoRutina = "adulto";
    } else if (edad >= 40) {
        tipoRutina = "mayor";
    }

    agregarAlCarrito(tipoRutina);
});

// Cuando se hace clic en un botón "Agregar al carrito"
$('.agregar-carrito').click(function() {
    const tipoRutina = $(this).data('rutina');
    agregarAlCarrito(tipoRutina);
});
