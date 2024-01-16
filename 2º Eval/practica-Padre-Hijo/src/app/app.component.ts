import { Component } from '@angular/core';
import { TRABAJDORES } from './modelos/trabajadores';
import { Trabajador } from './modelos/trabajador';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica-Padre-Hijo';

//declarar la variable titulo
  

//declarar la variable trabajadores array del tipo Trabajador
  trabajadores = TRABAJDORES

 // metodo para borrar el trabajador pasado por id del array de trabajadores
 borrar(trabajador:Trabajador){
  let pos = this.trabajadores.findIndex(a => a.id == trabajador.id)
  this.trabajadores.splice(pos,1)
 }

 // metodo para sumar un voto al trabajador pasado por id
 sumaVoto(trabajador :Trabajador){
    trabajador.votos ++
 }

 // metodo para restar un voto al trabajador pasado por id
 restaVoto(trabajador:Trabajador){
  if(trabajador.votos > 0){
    trabajador.votos --
  } else {
    alert('Ya tiene 0 votos.')
  }
 }

}
