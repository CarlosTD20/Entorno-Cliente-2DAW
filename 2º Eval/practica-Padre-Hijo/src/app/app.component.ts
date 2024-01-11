import { Component } from '@angular/core';
import { TRABAJDORES } from './modelos/trabajadores';

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
 borrar(id:number){}

 // metodo para sumar un voto al trabajador pasado por id
 sumaVoto(id:number){}

 // metodo para restar un voto al trabajador pasado por id
 restaVoto(id:number){}

}
