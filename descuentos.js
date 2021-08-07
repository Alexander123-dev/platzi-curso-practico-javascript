//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeConDescuento) / 100;

    return precioConDescuento;
}


// console.log({ 
//     precioOriginal, 
//     descuento, 
//     porcentajeConDescuento, 
//     precioConDescuento
// });

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    
    const inputDiscount = document.getElementById("InputDiscount")
    const discountValue = inputDiscount.value;

    let descuento;

    switch(couponValue) {
      case "JuanDC_es_Batman":
        descuento = 15;
      break;
      case "pero_no_le_digas_a_nadie":
        descuento = 30;
      break;
      case "es_un_secreto":
        descuento = 25;
      break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;

}