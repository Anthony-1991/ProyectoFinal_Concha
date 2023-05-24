$(document).ready(function () {    
$("#filterBtn").click (function (){
    $("#filter").slideToggle()
})


const URLGET = "data/products.json";
    $.get (URLGET, function (data, status){
        if (status == "success"){
            for (const lit of data){
            products.push(new Product(lit.code, lit.name, lit.price, lit.img, lit.category, lit.quantity));
            }
            
    }
    for (const product of products) {
        $("#productsUI"). append (`<div class="card"> 
                                <img src="${product.img}" class="imgCards" width="150px">
                                <h2 class="cardTitle">${product.name}</h2>
                                <h4 class="cardSubtitle">S/ ${product.price}</h4>
                                <button id="${product.code}" class="btnBuy">Comprar</button>
                                <div>`)} 

                                const buttons = $(".btnBuy");
                                for (const buy of buttons) {
                                    buy.onclick = buyHandler;
                            }
                            $(".btnBuy").click (function (){
                                swal("Su producto se agrego al carrito!", "" , "success");
                            })                          
    })  
});

window.addEventListener ("load", () =>{
    $(".loading").remove();
});

let checkout;

if ("checkout" in localStorage) {
    checkout = JSON.parse(localStorage.getItem("checkout"));
    if(checkout.length){
        let quantity = document.getElementById('quantity').src="./img/icon-carrito.svg"
    }
}else{
    checkout=[];
}

function buyHandler(e) {
    const productID = e.target.id
    const selected = checkout.find(product => product.code == productID);
    if(selected == undefined){
        checkout.push(products.find(p => p.code == productID));
    }else{
        //SI SE ENCONTRO AGREGAR UN CANTIDAD
        selected.adding(1);
    }
    
    localStorage.setItem("checkout", JSON.stringify(checkout));
    if(checkout.length){
        let quantity = document.getElementById('quantity').src="./img/icon-carrito.svg"
    }
}

if(checkout.length){
    let quantity = document.getElementById('quantity').src="./img/icon-carrito.svg"
}
else {
    let quantity = document.getElementById('quantity').src="./img/icon-carrito.svg"
}
