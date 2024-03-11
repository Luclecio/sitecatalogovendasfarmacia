//type:  snacks (fraldas), candy (higiene e beleza),  cakes (remédios),  drinks (dermocosméticos).
let items = [
    {id:1, name:'Bolinho de Bacalhau', img:'images/doces.png', type: 'snacks', price:[8.00, 8.00, 8.00], sizes:[' ', '',''], description:'130g'},
    {id:2, name:'Bolinho de Carne seca c/ Banana', img:'images/doces.png', type: 'snacks', price:[8.00, 8.00, 8.00], sizes:[' ', '',''], description:'130g'},
    {id:3, name:'Refrigerante Lata', img:'refri.png', type: 'drinks', price:[4.50, 4.50, 4.50], sizes:[' ', '',''], description:'350Ml'},
    {id:4, name:'Suco/Copo', img:'sucos.png', type: 'drinks', price:[4.00, 4.00, 4.00], sizes:[' ', '',''], description:'300Ml '},
    {id:5, name:'Água', img:'agua.png',type: 'drinks', price:[3.00, 3.00, 3.00], sizes:[' ', '',''], description:'500Ml '},
    {id:6, name:'Soda italiana', img:'soltai.png',type: 'drinks', price:[7.00, 7.00, 7.00], sizes:[' ', '',''], description:' 300ML'},
    {id:7, name:'Café Cremoso', img:'cafecremoso.png',type: 'drinks', price:[7.00, 7.00, 7.00], sizes:[' ', '',''], description:'290ML'},
    {id:8, name:'Café c/Leite', img:'cafecomleite.png',type: 'drinks', price:[3.00, 3.00, 3.00], sizes:[' ', '',''], description:' 290ML'},
    {id:9, name:'Cafezinho', img:'cafezinho.png',type: 'drinks', price:[2.00, 2.00, 2.00], sizes:[' ', '',''], description:'150ML'},
    {id:10, name:'Chocolate Quente', img:'choquente.png',type: 'drinks', price:[8.00, 8.00, 8.00], sizes:[' ', '',''], description:'290ML'},


    {id:11, name:'Bolo de abacaxi', img:'img/abacaxi.jpg', type: 'cakes', price:[20.00, 20.00, 20.00], sizes:[' ', '',''], description:'Serve 10 Fatias.'},
    {id:12, name:'Bolo de Banana com abacaxi ', img:'img/abacaxicombanana.jpg',type: 'cakes',price:[20.00, 20.00, 20.00], sizes:[' ', '',''], description:'Serve 10 Fatias.'},
    {id:13, name:'Bolo de banana ', img:'img/banana.jpg',type: 'cakes',price:[20.00, 20.00, 20.00], sizes:[' ', '',''], description:'Serve 10 Fatias.'},
    {id:14, name:'Bolo de cenoura com cobertura ', img:'bolodecenouracomcobertura.png',type: 'cakes', price:[22.00, 22.00, 22.00], sizes:[' ', '',''], description:'Serve 10 Fatias.'},
    {id:15, name:'Bolo de chocolate com cobertura', img:'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/6DB6A5FD-0325-4570-96F6-4DA23B1A77FD/Derivates/D99C1478-D41F-4745-A836-44617BA81F27.jpg',type: 'cakes', price:[24.00, 24.00, 24.00], sizes:[' ', '',''], description:'Serve 10 Fatias.'},
    {id:16, name:' Bolo de chocolate com cobertura de chocolate', img:'chocolatecomchocolate.png',type: 'cakes', price:[27.00, 27.00, 27.00], sizes:[' ', '',''], description:'Serve 10 Fatias.'},
    {id:17, name:'Bolo de Tapioca ', img:'img/tapioca.jpg',type: 'cakes',price:[20.00, 20.00, 20.00], sizes:[' ', '',''], description:'Serve 10 Fatias.'},
    {id:18, name:'Bolo de Aipim ', img:'https://casbri.com.br/wp-content/uploads/2022/06/Bolo-de-aipim-cozido.jpg',type: 'cakes', price:[20.00, 20.00, 20.00], sizes:[' ', '',''], description:'Serve 10 Fatias.'},
    {id:19, name:'Bolo de milho ', img:'https://img.cybercook.com.br/receitas/641/bolo-de-milho-4.jpeg',type: 'cakes', price:[20.00, 20.00, 20.00], sizes:[' ', '',''], description:'Serve 10 Fatias.'},
    {id:20, name:'Bolo de Cenoura R$ 18,00', img:'https://comidinhasdochef.com/wp-content/uploads/2019/05/Bolo-de-Cenoura-Super-Fofo.jpg', price:[18.00, 18.00, 18.00], sizes:[' ', '',''], description:'Serve 10 Fatias.'},
    {id:21, name:'Bolo de Mesclado R$ 18,00', img:'img/Mesclado.jpg',type: 'cakes', price:[18.00, 18.00, 18.00], sizes:[' ', '',''], description:'Serve 10 Fatias.'},
    {id:22, name:'Bolo de Tradicional de ovos', img:'https://blog.mantiqueirabrasil.com.br/wp-content/uploads/2022/05/bolo-de-ovos.jpeg',type: 'cakes', price:[18.00, 18.00, 18.00], sizes:[' ', '',''], description:'Serve 10 Fatias.'},
    {id:23, name:'Bolo de Ameixa ', img:'https://i0.wp.com/pitadinha.com/wp-content/uploads/2016/09/IMG_3978.jpg?fit=2048%2C1280&ssl=1',type: 'cakes', price:[18.00, 18.00, 18.00], sizes:[' ', '',''], description:'Serve 10 Fatias.'},
    {id:24, name:'Bolo de Chocolate sem cobertura', img:'https://st1.uvnimg.com/32/ee/e0aa6c2b4ccd88bbb6a1e5e372b6/bolo-chocolate-simples-0123-1400x800.jpg',type: 'cakes',  price:[18.00, 18.00, 18.00], sizes:[' ', '',''], description:'Serve 10 Fatias.'},
    {id:25, name:'Bolo de Fuba com goiabada ', img:'bolodefubagoiabada.png',type: 'cakes',  price:[20.00, 20.00, 20.00], sizes:[' ', '',''], description:'Serve 10 Fatias.'},



    {id:26, name:'Brigadeiro R$ 3,00', img:'brigadeiro.png', type: 'candy',  price:[3.00, 3.00, 3.00], sizes:[' ', '',''], description:'40 gramas'},
    {id:27, name:'Casadinha R$ 3,00', img:'casadinha.png', type: 'candy', price:[3.00, 3.00, 3.00], sizes:[' ', '',''], description:'40 gramas'},
    {id:28, name:'Trufa R$ 3,50', img:'trufa.png',  type: 'candy', price:[3.50, 3.50, 3.50], sizes:[' ', '',''], description:'40 gramas '},
    {id:29, name:'Brownie R$ 10,00', img:'brownie.png',type: 'candy', price:[10.00, 10.00, 10.00], sizes:[' ', '',''], description:'150 gramas '},
    {id:30, name:'Cupcake R$ 5,00', img:'cupcake.png',type: 'candy', price:[5.00, 5.00, 5.000], sizes:[' ', '',''], description:'50 grama'},
    {id:31, name:'Empada Doce R$ 4,00', img:'empadadoce.png',type: 'candy', price:[4.00, 4.00, 4.00], sizes:[' ', '',''], description:'45 grama '},
    {id:32, name:'Copo da felicidade R$ 12,00', img:'copodafelicidade.png',type: 'candy', price:[12.00, 12.00, 12.00], sizes:[' ', '',''], description:'250ml '},

    {id:33, name:'Bolinho De Bacalhau', img:'bolinhodebacalhau.png',type: 'snacks',price:[8.00, 8.00, 8.00], sizes:[' ', '',''], description:'Produto feitos no dia, 130 Gramas.'},
    {id:34, name:'Bolinho de carne seca c/ Banana ', img:'bolinhodecarnesecacbanana.png',type:'snacks',price:[8.00, 8.00, 8.00], sizes:[' ', '',''], description:'Produto feitos no dia, 130 Gramas.'},
    {id:35, name:'Bolo Salgado Fatia ', img:'bolosalgadofatia.png',type:'snacks',price:[6.00, 6.00, 6.00], sizes:[' ', '',''], description:'Produto feitos no dia, 130 Gramas.'},
    {id:36, name:'Camarão Encapotado', img:'camarãoencapotado.png',type:'snacks',price:[7.00, 7.00, 7.00], sizes:[' ', '',''], description:'Produto feitos no dia, 130 Gramas.'},
    {id:37, name:'Empada Doce', img:'empadadoce.png',type:'snacks',price:[6.00, 6.00, 6.00], sizes:[' ', '',''], description:'Produto feitos no dia, 130 Gramas.'},
    {id:38, name:'Empada ', img:'empada.png',type:'snacks',price:[6.00, 6.00, 6.00], sizes:[' ', '',''], description:'Produto feitos no dia, 130 Gramas.'},
    {id:39, name:'Pão Pizza ', img:'pãopizza.png',type:'snacks',price:[6.00, 6.00, 6.00], sizes:[' ', '',''], description:'Produto feitos no dia, 130 Gramas.'},
    {id:40, name:'Quiche ', img:'quiche.png',type:'snacks',price:[7.00,7.00, 7.00], sizes:[' ', '',''], description:'Produto feitos no dia, 130 Gramas.'},
    {id:41, name:'Risole', img:'risole.png',type:'snacks',price:[6.00, 6.00, 6.00], sizes:[' ', '',''], description:'Produto feitos no dia, 130 Gramas.'},
    {id:42, name:'Saltenha ', img:'saltenha.png',type:'snacks',price:[8.00, 8.00, 8.00], sizes:[' ', '',''], description:'Produto feitos no dia, 130 Gramas.'},
    {id:43, name:'Fatia Bolo Tapioca', img:'fatiabolotapioca.png',type:'snacks',price:[5.00, 5.00, 5.00], sizes:[' ', '',''], description:'1 Fatia.'},
    {id:44, name:'Fatia Bolo Mesclado ', img:'fatiadebolomesclado.png',type:'snacks',price:[5.00, 5.00, 5.00], sizes:[' ', '',''], description:'1 Fatia.'},
    {id:45, name:'Fatia Bolo Chocolate ', img:'fatiabolochocolate.png',type:'snacks',price:[12.00, 5.00, 5.00], sizes:[' ', '',''], description:'1 Fatia.'},
    {id:46, name:'Fatia Bolo Tradicional ', img:'fatiabolotradicional.png',type:'snacks',price:[5.00, 5.00, 5.00], sizes:[' ', '',''], description:'1 Fatia.'},
    {id:47, name:'Salada de Fruta ', img:'saladadefrutas.png',type:'snacks',price:[6.00, 6.00, 6.00], sizes:[' ', '',''], description:'1 Fatia.'},
];

let cart = [];
let cartItemsSaved = JSON.parse(window.localStorage.getItem("cart"));
let modalQt = 0;
let key = 0;

window.addEventListener("load", () => {
    cart.push(...cartItemsSaved || []);
    updateCart()
    window.localStorage.setItem("cart", JSON.stringify(cart));
}); 

const c = (el)=>document.querySelector(el); 
const cs = (el)=>document.querySelectorAll(el);

function getTypeFilterValue(){
    return !window.localStorage.getItem("type") ? 'snacks' : window.localStorage.getItem("type");
}

items.filter(item => item.type === getTypeFilterValue()).map((item, index)=>{
    let menuItem = c('.menu .snacks-items').cloneNode(true);
    menuItem.setAttribute('class', index + ' snacks-items');
    menuItem.setAttribute('data-key', index);
    menuItem.querySelector('.snacks-img').src= `${item.img}`;
    menuItem.querySelector('.snacks-footer p').innerHTML = item.description;
    menuItem.querySelector('.snacks-info h1').innerHTML = item.name;
    menuItem.querySelector('.snacks-span').innerHTML = `R$ ${item.price[0].toFixed(2)}`;
    menuItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault(); 
        key = e.target.closest('.snacks-items').getAttribute('data-key'); 
        modalQt = 1;
        
        c('.menuBig img').src = items[key].img;
        c('.menuInfo h1').innerHTML = items[key].name;
        c('.menuInfo--desc').innerHTML = items[key].description;
        c('.menuInfo--size.selected').classList.remove('selected');
        cs('.menuInfo--size').forEach((size, sizeIndex)=>{
            if(sizeIndex == 2) {
                size.classList.add('selected');
                c('.menuInfo--actualPrice').innerHTML = `R$ ${items[key].price[sizeIndex].toFixed(2)}`;
                //c('.menuInfo--actualPrice2').innerHTML = `R$ ${items[key].price[sizeIndex].toFixed(2)}`;

            }
            //size.innerHTML = items[key].sizes[sizeIndex];
            size.querySelector('span').innerHTML = items[key].sizes[sizeIndex];
        });
        c('.menuInfo--qt').innerHTML = modalQt;
        c('.menuWindowArea').style.opacity = 0; 
        c('.menuWindowArea').style.display = 'flex';
        setTimeout(()=> {
            c('.menuWindowArea').style.opacity = 1; 
        }, 200);
    });

    c('#snacks').append(menuItem);
    
});

function closeModal(){
    c('.menuWindowArea').style.opacity = 0; 
    setTimeout(()=> {
        c('.menuWindowArea').style.display = 'none';
    }, 500);
    
}

cs('.menuInfo--cancelButton, .menuInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
});

c('.menuInfo--qtmenos').addEventListener('click', ()=>{
    if(modalQt > 1) {
        modalQt--;
        c('.menuInfo--qt').innerHTML = modalQt;
    }
});

c('.menuInfo--qtmais').addEventListener('click', ()=>{
    modalQt++;
    c('.menuInfo--qt').innerHTML = modalQt;
});

cs('.menuInfo--size').forEach((size, sizeIndex)=>{
    size.addEventListener('click', (e)=> {
        c('.menuInfo--size.selected').classList.remove('selected');
        //e.target.classList.add('selected'); //ocorre erro se clicar no <span></span>
        size.classList.add('selected');
        c('.menuInfo--actualPrice').innerHTML = `R$ ${items[key].price[sizeIndex].toFixed(2)}`;
        //c('.menuInfo--actualPrice2').innerHTML = `R$ ${items[key].price[sizeIndex].toFixed(2)}`;
    });
});


c('.menuInfo--addButton').addEventListener('click', ()=>{
    let size = parseInt(c('.menuInfo--size.selected').getAttribute('data-key'));
    let identifier = items[key].id+'@'+size;
    
    let locaId = cart.findIndex((item)=>item.identifier == identifier);
    if(locaId > -1){
        cart[locaId].qt += modalQt; 
    } else {
        cart.push({
            identifier,
            id: items[key].id,
            size,
            qt:modalQt
        });
        window.localStorage.setItem("cart", JSON.stringify(cart));
    }
    updateCart();
    closeModal();
});

window.addEventListener("load", () => {
    if(cart.length > 0) {
        c('.menu-openner span').innerHTML = cart.length;
    }
});


c('.menu-openner').addEventListener('click', ()=>{
    updateCart();
    if(cart.length > 0){
        c('aside').style.left = '0';
    }
});

c('.menu-closer').addEventListener('click', ()=>{
    c('aside').style.left='100vw';
});

$("#cartFinalizar").click(function(){
    $(location).attr("href", "https://wa.me/5575983632270?text=Ol%C3%A1+Gostaria+de+fazer+o+seguinte+pedido" + encodeURI( "olá, gostaria de fazer um pedido\n" + document.getElementById("cart").innerText.replace(/<br\s*\/?>/, "\n") + document.getElementById("details").textContent + "\n *Campo para endereço de entrega e observações:* \n"))
    window.localStorage.clear();
    var pegarTxt = document.getElementById("Total").innerText;
    
})

function sendOrder(){
    $(location).attr("href", "https://wa.me/5575983632270?text=Ol%C3%A1+Gostaria+de+fazer+o+seguinte+pedido" + encodeURI( "olá, gostaria de fazer um pedido\n" + document.getElementById("cart").innerText.replace(/<br\s*\/?>/, "\n") + document.getElementById("details").textContent + "\n *Campo para endereço de entrega e observações:* \n"))
    window.localStorage.clear();
    var pegarTxt = document.getElementById("Total").innerText;
}

function updateCart() {
    window.localStorage.setItem("cart", JSON.stringify(cart));
    c('.menu-openner span').innerHTML = cart.length;
    if(cart.length > 0) {
        c('aside').classList.add('show');
        c('.cart').innerHTML = ''; 
        let subtotal = 0;
        let desconto = 0;
        let total = 0;
        let taxa = 5;
        cart.map((itemCart, index)=>{
            let modelItem = items.find((itemBD)=>itemBD.id == itemCart.id);
            subtotal += modelItem.price[itemCart.size] * itemCart.qt;
            let cartItem = c('.menu .cart--item').cloneNode(true);
            let menuizeName;
            switch(itemCart.size) {
                case 0:
                    menuizeName = `${items[key].sizes[0]}`;
                    break;
                case 1:
                    menuizeName = `${items[key].sizes[1]}`;
                    break;
                case 2:
                    menuizeName = `${items[key].sizes[2]}`;
            }
            //itens abaixo aparecem no carrinho enviar pedido
            cartItem.querySelector('img').src = modelItem.img;
            //cartItem.querySelector('.cart--item-nome').innerHTML = `${modelItem.name} - ${modelItem.sizes[itemCart.size]}`;
            cartItem.querySelector('.cart--item-nome').innerHTML = `${modelItem.name} ${menuizeName}`;
            cartItem.querySelector('.cart--item--qt').innerHTML = itemCart.qt;
            cartItem.querySelector('.cart--item-qtmenos').addEventListener('click',()=>{
                if(itemCart.qt > 1) {
                    itemCart.qt--
                } else {
                    cart.splice(index, 1);
                    
                }
                updateCart();
            });
            cartItem.querySelector('.cart--item-qtmais').addEventListener('click',()=>{
                itemCart.qt++; 
                updateCart();
            });
            c('.cart').append(cartItem);
        });

        desconto = subtotal * 0.1;
        total = subtotal - desconto + taxa;
        c('.subtotal span:last-child').innerHTML = `R$ ${subtotal.toFixed(2)}`;
        c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`;
        c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`;
    } else {
        c('.menu-openner span').innerHTML = 0;
        c('aside').innerHTML = `
        <div class="cart--area">
            <div class="texto--cart">FINALIZE AGORA</div><br><br>

            <div class="cart" id="cart"></div>
            <div class="cart--details" id="details">
                <div class="fontes1">
                    <div class="cart--totalitem subtotal">
                        <span>Subtotal</span>
                        <span>R$ 0,00</span>
                    </div>
                    <div class="cart--totalitem taxa">
                        <span>Taxa de entrega</span>
                        <span>R$ 5,00</span>
                    </div>
                    <div class="cart--totalitem desconto">
                        <span>Desconto (-10%)</span>
                        <span>R$ 0,00</span>
                    </div>
                    <div class="cart--totalitem total big">
                        <span>Total</span>
                        <span>R$ 0,00</span>
                    </div>
                </div>
            </div>
            <div class="cart--finalizar" id="cartFinalizar" onclick="sendOrder()">ENVIAR PEDIDO</div><br><br>
            <div class="menu-closer">
                <span class="material-icons">arrow_back_ios</span>
            </div>
        </div>
        `;
        
        c('aside').classList.remove('show');
        c('aside').style.left = '100vw';
    }
}
