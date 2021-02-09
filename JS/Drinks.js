

// -----add to cart ----


let products = [

    {name:"-iced latte. /",price:1.5, },
    {name:"-iced Americano. /",price:1.5, },
    {name:"-Sparkling Ori. /",price:1.75, },
    {name:"-iced Coconut latte. /",price:2, },
    {name:"-iced Origami latte. /",price:2, },
    {name:"-Cold Brew. /",price:2, },

    {name:"-Hot latte. / ",price:1.5, },
    {name:"-Flat white. / ",price:1.75, },
    {name:"-Hot coconut latte. / ",price:2, },
    {name:"-Hot spanish latte. / ",price:2, },
    {name:"-hot Origami latte. / ",price:2, },
    {name:"-hot toffe nut latte. / ",price:2, },

    {name:"-ice box. / ",price:15, },

    {name:"-1 Liter of latte. /",price:8, },
    {name:"-1 Liter of Americano. /",price:8, },
    {name:"-1 Liter of Swan latte. /",price:9, },
    {name:"-1 Liter of Coconut latte. /",price:9, },
    {name:"-1 Liter of Origami latte. /",price:9, },
    {name:"-1 Liter of Cold Brew. /",price:10, }
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

       let price= element.price * element.quantity

       total = total + price

       document.getElementById('total').value=total
        
       let list =document.getElementById("showcart");

       list.innerHTML +=`<li>${element.quantity} ${element.name} ${element.price}</li>`
    }

    document.getElementById("total").innerText=`${total} KD`
}


// ------------