// Objeto para almacenar las rutinas de entrenamiento y sus precios
const rutinas = {
    joven: {
        nombre: "Rutina Joven",
        ejercicios: ["Sentadilla con barra 4x12", "Peso muerto 4x12-10-8-8", "Correr durante 15 minutos"],
        precio: 5000
    },
    adulto: {
        nombre: "Rutina Adulto",
        ejercicios: ["Nadar 20 minutos", "Hacer 30 sentadillas", "Yoga durante 15 minutos"],
        precio: 5000
    },
    mayor: {
        nombre: "Rutina Mayor",
        ejercicios: ["Caminar 30 minutos", "Estiramientos suaves", "Hidratación adecuada"],
        precio: 5000
    }
};

// Carrito de compras
const carrito = [];

// Función para agregar una rutina al carrito
function agregarAlCarrito(tipoRutina) {
    carrito.push(rutinas[tipoRutina]);
    actualizarCarrito();
}

// Función para mostrar las rutinas en el carrito
function actualizarCarrito() {
    const carritoList = document.getElementById("carrito-list");
    carritoList.innerHTML = "";

    let total = 0;

    carrito.forEach(rutina => {
        const li = document.createElement("li");
        li.textContent = rutina.nombre + " - Precio: $" + rutina.precio;
        carritoList.appendChild(li);
        total += rutina.precio;
    });

    // Muestra el precio total
    const totalElement = document.getElementById("total");
    totalElement.textContent = "Total: $" + total;
}

// Event listener para el botón "Obtener Rutina"
const obtenerRutinaButton = document.getElementById("obtenerRutina");
obtenerRutinaButton.addEventListener("click", () => {
    const edadInput = document.getElementById("edad");
    const edad = parseInt(edadInput.value);

    let tipoRutina = "joven";

    if (edad >= 18 && edad < 40) {
        tipoRutina = "adulto";
    } else if (edad >= 40) {
        tipoRutina = "mayor";
    }

    agregarAlCarrito(tipoRutina);
});

// Event listeners para los botones "Agregar al carrito"
const agregarAlCarritoButtons = document.querySelectorAll(".agregar-carrito");
agregarAlCarritoButtons.forEach(button => {
    button.addEventListener("click", event => {
        const tipoRutina = event.target.getAttribute("data-rutina");
        agregarAlCarrito(tipoRutina);
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

