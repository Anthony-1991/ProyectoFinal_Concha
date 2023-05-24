window.addEventListener ("load", () =>{
    $(".loading").remove();
});

let divCheckout = document.getElementById("checkout");
let checkout = [];


if ("checkout" in localStorage && JSON.parse(localStorage.getItem('checkout')).length > 0){
    let cart = JSON.parse(localStorage.getItem("checkout"));
    for (const p of cart) {
        checkout.push(new Product(p.code, p.name, p.price, p.img, p.category, p.quantity))
    }

    for (const shopping of checkout){
    $("#checkout"). append (`<div class="divCheckout"> 
                                <img src='../${shopping.img}' class= "checkoutImg"/>
                                <p>${shopping.name} S/ ${shopping.price}</p>
                                <p id='quantity-${shopping.code}'>${shopping.quantity}</p>
                                    <div class="buttonsCheckout">
                                        <button id="${shopping.code}" class="btn btn-success btn-add">+</button>
                                        <button id="${shopping.code}" class="btn btn-danger btn-sub">-</button>
                                        <p id='price-${shopping.code}'>Subtotal: S/ ${shopping.price * shopping.quantity}</p>
                                        <img src='../img/icon-tacho.svg' id="${shopping.code}"  class='btn-delete'/>
                                    </div>
                            <div>`)
    }
    let total = document.getElementById("subtotal");
    total.innerHTML= ''
    let price = document.createElement ("div");
    price.innerHTML = `<p>Total</p>
                    <p>S/ ${calculateTotal()}</p>`
    total.appendChild (price)
}else{
    let text = document.createElement('div');
    text.innerHTML = `<h2>No hay artículos seleccionados</h2>
                    <a  href="../index.html"><button class="backHome">Inicio</button></a>`
    divCheckout.appendChild(text)
}

// CALCULO DEL SUBTOTAL
const priceProduct = (product) =>{
    const price = document.getElementById(`price-${product.code}`);
    price.innerHTML = '';
    price.innerHTML = `Subtotal: S/ ${product.price * product.quantity}`
}



function addQuantity(){
    let product = checkout.find(p => p.code == this.id);
    product.adding(1);
    let quantity = document.getElementById (`quantity-${product.code}`);
    quantity.innerHTML = "";
    quantity.innerHTML = `${parseInt(product.quantity)}`
    
    localStorage.setItem("checkout",JSON.stringify(checkout));

    let total = document.getElementById ("subtotal");
    total.innerHTML = "";
    let price = document.createElement ("div");
    price.innerHTML = `<p>Total</p>
                    <p>$${calculateTotal()}</p>`
    total.appendChild(price)
    priceProduct(product)
}

$('.btn-add').on("click", addQuantity);



function subQuantity(){
    let product = checkout.find(p => p.code == this.id);
    if(product.quantity > 1){
    product.adding(-1);
    let quantity = document.getElementById (`quantity-${product.code}`);
    quantity.innerHTML = "";
    quantity.innerHTML = `${parseInt(product.quantity)}`
      
    localStorage.setItem("checkout",JSON.stringify(checkout));
    }
    let total = document.getElementById ("subtotal");
    total.innerHTML = "";
    let price = document.createElement ("div");
    price.innerHTML = `<p>Total</p>
                    <p>S/ ${calculateTotal()}</p>`
    total.appendChild(price)
    priceProduct(product)
}

$('.btn-sub').click(subQuantity);



const deleteItems = (e) =>{
    
    for (let i=0; i<checkout.length; i++) {
        if(parseInt(checkout[i].code) == parseInt (e.target.id)){
            checkout.splice(i,1);
            break;
        }
    }
    
    localStorage.setItem('checkout', JSON.stringify(checkout));
    divCheckout.innerHTML = '';
    for (const shopping of checkout) {
        $("#checkout"). append (`<div class="divCheckoutt"> 
                                <img src='../${shopping.img}' class= "checkoutImg"/>
                                <p>${shopping.name} S/ ${shopping.price}</p>
                                <p id='quantity-${shopping.code}'>${shopping.quantity}</p>
                                    <div class="buttonsCheckout">
                                        <button id="${shopping.code}" class="btn btn-success btn-add">+</button>
                                        <button id="${shopping.code}" class="btn btn-danger btn-sub">-</button>
                                        <p id='price-${shopping.code}'>Subtotal: S/ ${shopping.price * shopping.quantity}</p>
                                        <img src='../img/icon-tacho.svg' id="${shopping.code}"  class='btn-delete'/>
                                    </div>
                            <div>`)
    }
    
    const buttons = document.getElementsByClassName("btn-delete");

    for (const deleteItem of buttons){
        deleteItem.addEventListener("click" , deleteItems);
    }

    $('.btn-add').on("click", addQuantity);
    $('.btn-sub').click(subQuantity);

    if(JSON.parse(localStorage.getItem('checkout')).length <= 0){
        let text = document.createElement('div');
        text.innerHTML = `<h2>No hay artículos seleccionados</h2>
                        <a href="../index.html"><button class="backHome">Inicio</button></a>`
        divCheckout.appendChild(text)
    } 
    let total = document.getElementById ("subtotal");
    total.innerHTML = "";
    let price = document.createElement ("div");
    price.innerHTML = `<p>Total</p>
                    <p>S/ ${calculateTotal()}</p>`
    total.appendChild(price)
}

const buttons = document.getElementsByClassName("btn-delete");

for (const deleteItem of buttons) {
    deleteItem.addEventListener("click" , deleteItems);
}

function calculateTotal () {
    let subtotal = 0;
    for (const product of checkout) {
        subtotal += product.subtotal()
    }
    return subtotal;
}

$(".purchase").click (function (){
    localStorage.clear();
    divCheckout.innerHTML = '';
    let text = document.createElement('div');
        text.innerHTML = `<h2>No hay artículos seleccionados</h2>
                        <a href="../index.html"><button class="backHome">Inicio</button></a>`
        divCheckout.appendChild(text)

    let total = document.getElementById ("subtotal");
        total.innerHTML = "";
        let price = document.createElement ("div");
        price.innerHTML = `<p>Total</p>
                        <p>S/ 0</p>`
        total.appendChild(price)
})