//Declarar variable 
let edad = 20; 
let tienePermiso = false;

//Evaluar condiciones
if (edad >= 18) {
    if (tienePermiso) {
      console.log("Puede entrar");
    } else {
      console.log("Necesita permiso");
    }
} else {
    console.log("No puede entrar");
}