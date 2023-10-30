let datos = [
    {
        'trimestre':"1º Trimestre",
        'id':1,
        'meses':['Enero','Febrero','Marzo']
    },
    {
        'trimestre':"2º Trimestre",
        'id':2,
        'meses':['Abril','Mayo','Junio']
    },
    {
        'trimestre':"3º Trimestre",
        'id':3,
        'meses':['Julio','Agosto','Septiembre']
    },
    {
        'trimestre':"4º Trimestre",
        'id':4,
        'meses':['Octubre','Noviembre','Diciembre']
    }
]

let selectTrimestre =document.getElementById("list-trimestre")
let selectMonth =document.getElementById("list-months")
let mes = document.getElementById("mes")

datos.forEach( t=> {
    let option = document.createElement("option")
    option.value = t.id
    option.innerHTML=t.trimestre

    selectTrimestre.appendChild(option)

})

selectTrimestre.addEventListener("change", function (){
    let selectedId = parseInt(this.value);
    let getMonth = datos.find(p => p.id == selectedId)

    selectMonth.innerHTML=""

     getMonth.meses.forEach(a=>{
         let optionMonth = document.createElement("option")
         optionMonth.value = a
         optionMonth.innerHTML= a

         selectMonth.appendChild(optionMonth)


     })
    mes.innerHTML=`Mes seleccionado ${selectMonth.value}`
})
