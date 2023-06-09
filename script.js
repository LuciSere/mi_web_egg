//boton click
function showAlert(){
    alert('¡Hola! haz hecho clic en el botón');
}

//oyente del evento submit, eviar del email
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

//verifique los criterios deseados, corrcta escritura del email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}
function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
        alert('Por favor ingrese un correo electrónico válido.');
    } else {
        alert('Correo electrónico enviado correctamente.');
    }
}

//boton menu
document.querySelector("button.button-menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
});


