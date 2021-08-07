// Codigo del Cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

//Codigo del Triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 

console.groupEnd();

// Codigo del Circulos
console.group("Circulos");

// Radio
//const radioCirculo = 4;
//console.log("El radio del Circulo es de: " + radioCirculo + " cm");

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI)

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//imprimir el perimetro del triangulo
function calcularPerimetroTriangulo() {
    const inputLado1 = parseInt(
      document.getElementById("inputTrianguloLado1").value
    );
    const inputLado2 = parseInt(
      document.getElementById("inputTrianguloLado2").value
    );
    const inputBase = parseInt(
      document.getElementById("inputTrianguloBase").value
    );
    const perimetro = perimetroTriangulo(inputLado1, inputLado2, inputBase);
    alert(perimetro);
  }
  
  //imprimir el area del triangulo

  function calcularAreaTriangulo() {
    const inputBase = parseInt(
      document.getElementById("inputTrianguloBase").value
    );
    const inputAltura = parseInt(
      document.getElementById("inputTrianguloAltura").value
    );
    const area = areaTriangulo(inputBase, inputAltura);
    alert(area);
  }
  
  function alturaTrianguloIsoceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
      console.log("Los lados a y b no son iguales");
    } else {
      const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
      const trianguloPequenoLadoBase = trianguloGrandeLadoA;
      
      const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
      const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

      const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

      const trianguloGrandeAltura = trianguloPequenoLadoA;
      return trianguloGrandeAltura;
    }
  }

  //imprimir el perimetro de un circulo
  function calcularPerimetroCirculo() {
    const inputRadio = parseInt(document.getElementById("inputCirculo").value);
    const perimetro = Math.floor(perimetroCirculo(inputRadio));
    alert(perimetro);
  }
  
  //imprimir el perimetro de un circulo
  function calcularAreaCirculo() {
    const inputRadio = parseInt(document.getElementById("inputCirculo").value);
    const area = Math.floor(areaCirculo(inputRadio));
    alert(area);
  }