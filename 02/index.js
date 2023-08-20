const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const cidade = cidades.reduce((acumulador, elementoAtual) => {
    if(acumulador.length < elementoAtual.length){
        return elementoAtual;
    } else {
       return acumulador;
    }
})

console.log(cidade)