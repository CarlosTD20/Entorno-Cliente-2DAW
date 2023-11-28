window.onload = () => {
    get()
}

let container =  document.getElementById("container")

async function get(){
    try {
        let response = await fetch('https://rickandmortyapi.com/api/character')
        if (!response.ok)
            throw new Error("Herror: " + response.status + response.statusText)
        response = await response.json()
        pintarPersonajes(response)

        let response2 = await fetch('https://rickandmortyapi.com/api/character/' + id)
        if (!response2.ok){
            throw new Error()
        }
        response2 = await response2.json()

    } catch (error){
        console.log(error)
    }
}

function pintarPersonajes(response){
    response.results.forEach(result => {

        let divContainer =  document.createElement("div")
        divContainer.className = "c-card-character"

        let name = document.createTextNode(result.name)
        let img = document.createElement("img")
        img.src = result.image

        divContainer.appendChild(name)
        divContainer.appendChild(img)

        divContainer.addEventListener("click", function (){
            detalleCharacter(response,result.id)
        })

        container.appendChild(divContainer)
    })
}

function detalleCharacter(response, id){
    let character = response.results.find(c => c.id === id)

    let dialog = document.createElement("dialog")
    container.appendChild(dialog)
    dialog.showModal()

    let contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.className="contenedorPricipal"

    let textContainer = document.createElement("div")
    textContainer.className = "contenedorTEXTO"

    let characterId = document.createElement("p")
    let idcharacter = document.createTextNode(character.id)
    characterId.appendChild(idcharacter)

    let characterName = document.createElement("p")
    let nameCharacter = document.createTextNode(character.name)
    characterName.appendChild(nameCharacter)

    let characterStatus = document.createElement("p")
    let statusCharacter = document.createTextNode(character.status)
    characterStatus.appendChild(statusCharacter)

    let characterSpecies = document.createElement("p")
    let speciesCharacter = document.createTextNode(character.species)
    characterSpecies.appendChild(speciesCharacter)

    let characterGender = document.createElement("p")
    let genderCharacter = document.createTextNode(character.gender)
    characterGender.appendChild(genderCharacter)

    textContainer.appendChild(characterId)
    textContainer.appendChild(characterName)
    textContainer.appendChild(characterStatus)
    textContainer.appendChild(characterSpecies)
    textContainer.appendChild(characterGender)


    let igmContainer = document.createElement("div")
    igmContainer.className = "contenedorIMG"
    let characterImg = document.createElement("img")
    characterImg.src = character.image
    igmContainer.appendChild(characterImg)

    contenedorPrincipal.appendChild(igmContainer)
    contenedorPrincipal.appendChild(textContainer)

    let contenedorBoton = document.createElement("div")
    contenedorBoton.className = "boton-close"
    let boton = document.createElement("p")
    // boton.innerHTML= "close"
    let close = document.createTextNode("CLOSE")
    boton.appendChild(close)
    boton.addEventListener("click",function (){
        dialog.close()
    })

    contenedorBoton.appendChild(boton)

    dialog.appendChild(contenedorPrincipal)
    dialog.appendChild(contenedorBoton)
}