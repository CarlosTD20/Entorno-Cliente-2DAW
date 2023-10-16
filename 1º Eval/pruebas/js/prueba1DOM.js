"use sctrict"

let capa=document.getElementById("main")

function crearParrafo(){
    let p=document.createElement("p")
    let t=document.createTextNode(prompt("Dime texto del parrafo"))
    //p.innerHTML("Hello World")
    p.appendChild(t)
    capa.appendChild(p)
}

function createIMG(){
    let i =document.createElement("img")
    i.src="assets/jroge.jpg"
    capa.appendChild(i)
}

function select(){
    let parrafos = document.getElementsByTagName("p")
    console.log(parrafos)
    Array.from(parrafos).forEach(p=>console.log(p.innerHTML))
    Array.from(parrafos).forEach(p=>console.log(p.firstChild))
}

function selectCapa(){
    let capa = prompt("Elija la capa")
    let accesCapa = document.getElementById(capa)
    console.log(accesCapa)

    let parrafos=accesCapa.getElementsByTagName("p")
    Array.from(parrafos).forEach(a=>console.log(a.innerHTML))
}

function selectClass(){
    let parrafos = document.getElementsByClassName("text-primary")
    Array.from(parrafos).forEach(p=>console.log(p.innerHTML))
}

function boton(){
    let btn = document.createElement("button")
    btn.innerHTML="Pulsame..."
    document.body.appendChild(btn)
    //1 primra forma, nombre funcion sin ()
    //btn.onclick=createIMG

    //función anonima "Sintaxis tradicinal"
    /*
    btn.onclick=function (){
        alert("Lo has puslado con cariño en JS tradicional")
    }*/

    //Sintaxis fatarraow
    //btn.onclick=()=>alert("Lo has puslado con cariño desde una fatArrow")

    btn.onclick=function (){
        creaP("Texto desde Boton")
    }
}

function creaP(texto){
    let p=document.createElement("p")
    p.textContent=texto
    capa.appendChild(p)
}

function createevent(){
    let tit=document.getElementById("titulo")
    tit.onclick=()=>alert("Ahora tengo clic")
}

function cambiartodo(){
    let btns=document.getElementsByTagName("button")
    Array.from(btns).forEach(b=>b.onclick=()=>alert("hola"))
}
