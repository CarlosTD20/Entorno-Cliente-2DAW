// Implementar lógica de la página

let matricula
window.onload = () => {
    matricula = new Matricula()
    filtrarProfesor()
    pintarModulos(modulos)
    matricula.verMatricula()
}

function filtrarProfesor(){
    let profesores = modulos.map(modulo => modulo.profesor);
    let ordenProfesores = document.getElementById("listaProfes")

    profesores.forEach( m => {
        let option = document.createElement("option")
        let optionText = document.createTextNode(m)
        option.appendChild(optionText).valueOf(m)
        ordenProfesores.appendChild(option)
    })
    ordenProfesores.addEventListener("click", function (){
        let listaCopia = modulos.slice()
        if (ordenProfesores.valueOf() == "Salva"){

        } else if (ordenProfesores.valueOf() == "Cesar"){

        }else if (ordenProfesores.valueOf() == "Lorenzo"){

        }else if (ordenProfesores.valueOf() == "Eva"){

        }
    })

}

function pintarModulos(modulos){
    let contenedorModulos = document.getElementById("contenedor")
    contenedorModulos.innerHTML=""

    modulos.forEach( m => {
        let cadrsModulos = document.createElement("div")
        cadrsModulos.className="card"

        let imgModulo= document.createElement("img")
        imgModulo.src=`./assets/${m.nombre}.png`

        let buttonModulo = document.createElement("button")
        buttonModulo.textContent= m.nombre
        buttonModulo.className = "btn-primary"
        buttonModulo.addEventListener("click", () =>{
            this.setModulo(m.codigo)
        })

        cadrsModulos.appendChild(imgModulo)
        cadrsModulos.appendChild(buttonModulo)

        contenedorModulos.appendChild(cadrsModulos)
    })
}

function setModulo(codigo){
    let modulo = modulos.find( m => m.codigo === codigo)
    matricula.anyadeModulo(modulo)
}

function datosAlumno(){

}

