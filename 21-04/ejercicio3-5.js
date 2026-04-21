let csv = "pera,manzana,banano,uva,mango";

let frutas = csv.split(",");

console.log("Cantidad de elementos:", frutas.lenght);
 
let resultado = frutas.join("-");
console.log("Array unido:", resultado);
