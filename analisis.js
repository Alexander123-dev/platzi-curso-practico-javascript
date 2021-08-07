//Helps
function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediaArimetrca(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculadora de Mediana

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    
    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaArimetrca([personitaMitad1, personitaMitad2]);
        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//Mediana Genral

const salarioCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

const salarioColSorted = salarioCol.sort(
    function (salaryA, salaryC) {
        return salaryA - salaryC;
    }
);

const medianaGeneralCol = medianaSalarios(salarioColSorted);

//Mediana del Top 10%

const spliceStart = (salarioColSorted.length * 90) / 100;
const spliceCount = salarioColSorted.length - spliceStart;

const salariosColTop10 = salarioColSorted.splice(
    spliceStart,
    spliceCount
);

const medianTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianTop10Col
});