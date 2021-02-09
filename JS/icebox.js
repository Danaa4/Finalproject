
let products = [
    {name:"-ice box. / ",price:15, }
]


let cart=[]

function addToCart(index){

    let product =products[index]
    let quantity=document.getElementById(index).value;

    product.quantity=quantity;

    cart.push(product)

   


   let total=0

    document.getElementById("showcart").innerHTML=""

    for (let index = 0; index < cart.length; index++) {
        let element = cart[index];

       let price= element.price 

       total = total + price

       document.getElementById('total').value=total
        
       let list =document.getElementById("showcart");

       list.innerHTML +=`<li>${element.quantity} ${element.name} ${element.price}</li>`
    }

    document.getElementById("total").innerText=`${total} KD`
}