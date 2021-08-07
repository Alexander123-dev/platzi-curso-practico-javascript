const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
];

const lista1Count = {};

lista1.map(
    
    function (elemento) {
        if(lista1Count[elemento]) {
        lista1Count[elemento] = lista1Count[elemento] + 1;
    }
    
        lista1Count[elemento] = 1;
    }
);

const lista1Arry = Object.entries(lista1Count).sort(
    function (elementoA, elementoC) {
        return elementoA[1] - elementoC[1];
    }
);

const moda = lista1Arry[lista1Arry.length - 1];
