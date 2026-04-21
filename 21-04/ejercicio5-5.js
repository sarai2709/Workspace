//Recorrer del 1 al 20 
for (let i = 1; i <= 20; i++) {

    if(i === 17) {
        break;
    }
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}
