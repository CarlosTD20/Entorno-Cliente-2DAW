//Pintar Imagenes
let getIMG = document.getElementsByClassName("img-origin")
let imgPrinted = document.getElementById("img-printed")

Array.from(getIMG).forEach(img =>{
    img.addEventListener("mouseover", a=>{
        imgPrinted.src = img.src
    })

    img.addEventListener("mouseout", e=>{
        imgPrinted.src = ""
    })
})

//Calcular precio de las CheckBox marcadas

let getProduct = document.querySelectorAll('input[type=checkbox]')

function calculatePrice(){
    let total = 0

    //De todos los imputs de tipo "checkbox" que esten marcados (checked) le suma el valor extraido del Array.from(objetos convertidos a
    // array) al total
    Array.from(getProduct).forEach(p=>{ if (p.type=="checkbox" && p.checked)
        total+= parseInt(p.value)
    })

    document.getElementById("price").textContent = `Total: ${total}`
}


