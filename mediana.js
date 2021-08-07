const lista1 = [
    100,
    200,
    500,
    400000000,
    0,
    65,
    92,
    800,
    350,
    120
];

lista1.sort(function(a,b){
    return a-b;
});

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 -1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaArimetrca ([
        elemento1,
        elemento2
    ]);

    mediana = promedioElemento1y2;

} else {
    mediana = lista1[mitadLista1];
}


function calcularMediaArimetrca(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista1.length;

    return promedioLista;
}