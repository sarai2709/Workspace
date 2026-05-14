// =====================================
// CALCULADORA CON FUNCIONES
// =====================================

// Función suma
function sumar(a, b) {
    return a + b 

}

// Función resta
function restar(a, b) {
    return a - b

}

// Función multiplicación
function multiplicar(a, b) {
    return a * b 

}

// Función división
function dividir(a, b) {
   if (b ===0)
    return "No se puede dividir por cero";
    return a / b 

}
function potencia(a, b) {
    return a ** b

}
function mayor(a, b) {
    if (a < b) {
        return b 
    } else {
        return a
    }

}

// =====================================
// LLAMADO DE FUNCIONES
// =====================================

console.log("Resultado suma:");
console.log(sumar(10, 5));

console.log("----------------");

console.log("Resultado resta:");
console.log(restar(10, 5));

console.log("----------------");

console.log("Resultado multiplicación:");
console.log(multiplicar(10, 5));

console.log("----------------");

console.log("Resultado división:");
console.log(dividir(10, 5));

console.log("Resultado potencia:");
console.log(potencia(2, 3));

console.log("Resultado mayor:");
console.log(mayor(7, 3));
