const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const maior = numeros.reduce((acumulador, atual) => {
    if(acumulador > atual){
        return acumulador;
    } else {
        return atual;
    }
})

console.log(maior)