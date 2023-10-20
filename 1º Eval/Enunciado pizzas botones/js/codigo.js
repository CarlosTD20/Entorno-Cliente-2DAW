"use strict"
//Creación de los contenedores
    let containerButtons = document.getElementById("botones")
    let container=document.getElementById("ingredientes")
    let continerIMG = document.getElementById("fotopizza")
    let printprice = document.getElementById("importe")

//creación botones
pizzas.forEach(c=>{
    let createButton = document.createElement("button")
    let setNamePizza = document.createTextNode(c.nombre)

    let idPizza= c.codigo

    createButton.appendChild(setNamePizza)
    containerButtons.appendChild(createButton)

    createButton.onclick=function (){
        printIngredients(idPizza)
    }
})

//Pintar los ingredientes
function printIngredients(idPizza){
    if (document.getElementsByClassName("c-ingredients")[0] && document.getElementsByClassName('imagencss')[0]){
        document.getElementsByClassName("c-ingredients")[0].remove()
        document.getElementsByClassName('imagencss')[0].remove();
    }

    let containerIngredients = document.createElement("div")
    containerIngredients.className="c-ingredients"

    let calculatePrice = parseInt(5)

    let pizza = pizzas.find(p=> p.codigo == idPizza)
    pizza.ingredientes.forEach(c=>{
        let Ingredient = document.createElement("p")
        let setNameIngredient = document.createTextNode(c.ingrediente)

        calculatePrice = calculatePrice + parseFloat(c.precio)



        Ingredient.appendChild(setNameIngredient)

        containerIngredients.appendChild(Ingredient)
    })

    let pizzaImg = document.createElement("img")
    pizzaImg.src="assets/"+idPizza+".jpg"
    pizzaImg.classList.add('imagencss')
    continerIMG.appendChild(pizzaImg)

    let setPrice = document.createTextNode(calculatePrice)

    container.appendChild(continerIMG)
    container.appendChild(containerIngredients)
    printprice.appendChild(setPrice)
}