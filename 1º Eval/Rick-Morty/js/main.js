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

    let moreinformation = document.createElement("button")
    moreinformation.className="c-character--moreinformation"
    let setmoreinformation = document.createTextNode("More Information")

    containerCharacter.appendChild(characterName)
    containerCharacter.appendChild(characterId)
    containerCharacter.appendChild(characterImg)
    containerCharacter.appendChild(setmoreinformation)

    containerCharacter.addEventListener("click", function() {
        getAllInformation(newID);
    });
    container.appendChild(containerCharacter)

})

function getAllInformation(newID){
    let characterInformation = personajes.results.find(p=>p.id == newID)
    console.log(characterInformation)

    let dialog =document.createElement("dialog")
    let divCharacter = document.createElement("div")
    divCharacter.className="c-information-character"

    
    let Imagecharacter = document.createElement("img")
    Imagecharacter.src=characterInformation.image

    let nameCharacter = document.createElement("h2")
    let setname=document.createTextNode("Name:" +characterInformation.name)
    nameCharacter.appendChild(setname)

    let IDCharacter= document.createElement("p")
    let setID=document.createTextNode("ID:" + characterInformation.id)
    IDCharacter.appendChild(setID)

    let genderCharacter=document.createElement("p")
    let setGender = document.createTextNode("Genero: " + characterInformation.gender)
    genderCharacter.appendChild(setGender)

    let speciesCharacter = document.createElement("p")
    let setspecies=document.createTextNode("Especie: " + characterInformation.species)
    speciesCharacter.appendChild(setspecies)

    let closedialog=document.createElement("button")
    closedialog.className="c-information-character__close"
    let setclose = document.createTextNode("Close")
    closedialog.appendChild(setclose)

    divCharacter.appendChild(Imagecharacter)
    divCharacter.appendChild(nameCharacter)
    divCharacter.appendChild(IDCharacter)
    divCharacter.appendChild(genderCharacter)
    divCharacter.appendChild(speciesCharacter)
    divCharacter.appendChild(closedialog)

    dialog.appendChild(divCharacter)

    container.appendChild(dialog).showModal()

    closedialog.addEventListener("click",function (){
        dialog.close()
    })
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