//Declara variable
let usuario = "Sari";
let contraseña = "099085273125";

// Validar formulario
if (usuario === "") {
console.log("Error: el usuario está vacío");
} else if (contraseña.length< 8) {
    console.log("Error: la contraseña debe tener al menos 8 caracteres");
} else {
    console.log("Login exitoso");
}