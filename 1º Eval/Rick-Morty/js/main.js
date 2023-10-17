"use strict"

let container = document.getElementById("dataPrinted")



personajes.results.forEach(c => {
    let containerCharacter = document.createElement("div")
    containerCharacter.className="c-character"

    let characterName = document.createElement("h1")
    //characterName.innerHTML=c.name
    let name=document.createTextNode(c.name)
    characterName.appendChild(name)
    //console.log(characterName)

    let characterId = document.createElement("p")
    //characterId.innerHTML=c.id
    let id = document.createTextNode(c.id)
    characterId.appendChild(id)
    let newID=c.id
    //console.log(characterId)

    let characterImg = document.createElement("img")
    characterImg.src= c.image
    //console.log(characterImg)

    containerCharacter.appendChild(characterName)
    containerCharacter.appendChild(characterId)
    containerCharacter.appendChild(characterImg)

    container.appendChild(containerCharacter)
    containerCharacter.onclick=()=>getAllInformation(newID)
})

function getAllInformation(newID){
    alert(newID)
}

/*
let idname=0
let idid = 0
for (let i = 0; i <=19; i++) {
    let nombre = personajes.results[i].name

    let identificacion = personajes.results[i].id

    characterName.appendChild(nombre)
    container.appendChild(characterName)

    characterId.appendChild(identificacion)
    container.appendChild(characterId)

    container.appendChild(espacio)
}
*/

/*
let nombre = document.createTextNode(personajes.results.map(a=>a.name))
characterName.appendChild(nombre)
container.appendChild(characterName)

let id = document.createTextNode(personajes.results.map(a=>a.id))
characterName.appendChild(id)
container.appendChild(characterId)

characterImg.src = personajes.results.find(a=>a.img)
container.appendChild(characterImg)
*/
/*
let idname=0
let idid = 0

personajes.results.forEach(c=>{
    let nombre = document.createTextNode(personajes.results[idname++].name)

    let identificacion = document.createTextNode(personajes.results[idid++].id)

    characterName.appendChild(nombre)
    container.appendChild(characterName)

    characterId.appendChild(identificacion)
    container.appendChild(characterId)

    container.appendChild(espacio)
})
*/