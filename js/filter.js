let filter = document.getElementById ("filter")
filter.innerHTML = `<button id='microfono' class='btnFilter'>Microfono</button>
                    <button id='camara' class='btnFilter'>Camara</button>
                    <button id='pad-mouse' class='btnFilter'>Pad Mouse</button>
                    <button id='mouse' class='btnFilter'>Mouse</button>
                    <button id='teclado' class='btnFilter'>Teclado</button>
                    <button id='audifono' class='btnFilter'>Audifono</button>
                    <button id='kit-gamer' class='btnFilter'>Kit Gamer</button>`;

const filterButtons = document.getElementsByClassName('btnFilter');
for (const buy of filterButtons) {
    buy.addEventListener("click" , filteredProducts);
}

function filteredProducts (e){
    let filtered = products.filter (obj => obj.category == e.target.id)

    let filter = document.getElementById ("filter")
    filter.innerHTML =  `<button id='back'>Lista general</button>
                        <button id='microfono' class='btnFilter'>Microfono</button>
                        <button id='camara' class='btnFilter'>Camara</button>
                        <button id='pad-mouse' class='btnFilter'>Pad Mouse</button>
                        <button id='mouse' class='btnFilter'>Mouse</button>
                        <button id='teclado' class='btnFilter'>Teclado</button>
                        <button id='audifono' class='btnFilter'>Audifono</button>
                        <button id='kit-gamer' class='btnFilter'>Kit Gamer</button>`;

    let btnBack = document.getElementById("back")
    btnBack.addEventListener("click", (e) => {
    filtered = products;
    let filter = document.getElementById("filter")
    filter.innerHTML = `<button id='microfono' class='btnFilter'>Microfono</button>
                        <button id='camara' class='btnFilter'>Camara</button>
                        <button id='pad-mouse' class='btnFilter'>Pad Mouse</button>
                        <button id='mouse' class='btnFilter'>Mouse</button>
                        <button id='teclado' class='btnFilter'>Teclado</button>
                        <button id='audifono' class='btnFilter'>Audifono</button>
                        <button id='kit-gamer' class='btnFilter'>Kit Gamer</button>`;

    const filterButtons = document.getElementsByClassName('btnFilter');
    for (const buy of filterButtons) {
    buy.addEventListener("click" , filteredProducts);
    }

    for (const product of filtered) {
        const divCard = document.createElement("div");
        divCard.className = "card"
        divCard.innerHTML = `<img src="${product.img}" class="imgCards" width="150px">
                            <h2 class="cardTitle">${product.name}</h2>                         
                            <h4 class="cardSubtitle">S/ ${product.price}</h4>
                            <button id="${product.code}" class="btnBuy">Comprar</button>`;
                            divContainer.appendChild(divCard)
    }
    let buttons = document.getElementsByClassName("btnBuy");
    for (const buy of buttons) {
        buy.addEventListener("click" , buyHandler);
    }
    $(".btnBuy").click (function (){
        swal("Su producto se agrego al carrito!", "" , "success");
    }) 
    
    })
    let btnFiltered = document.getElementsByClassName("btnFilter")
    for (const filter of btnFiltered) {
        filter.addEventListener("click", filteredProducts)
    }
    
    const divContainer = document.getElementById("productsUI")
    divContainer.innerHTML = ""

    for (const product of filtered) {
        const divCard = document.createElement("div");
        divCard.className = "card"
        divCard.innerHTML = `<img src="${product.img}" class="imgCards" width="150px">
                            <h2 class="cardTitle">${product.name}</h2>
                            <h4 class="cardSubtitle">S/ ${product.price}</h4>
                            <button id="${product.code}" class="btnBuy">Comprar</button>`;
                            divContainer.appendChild(divCard)
    }

    const buttons = document.getElementsByClassName("btnBuy");
    for (const buy of buttons) {
        buy.addEventListener("click" , buyHandler);
    }
    $(".btnBuy").click (function (){
        swal("Su producto se agrego al carrito!", "" , "success");
    }) 
}