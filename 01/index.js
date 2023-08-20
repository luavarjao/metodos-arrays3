const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

numeros.sort ((a,b) => {
    return a- b;
})

console.log(numeros);

numeros.sort ((a,b) => {
    return b - a;
})

console.log(numeros);

numeros.sort();

console.log(numeros);

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

frutas.sort();
console.log(frutas);

frutas.reverse();
console.log(frutas);

frutas.sort ((a,b) => {
    return a.length - b.length;
})

console.log(frutas);
