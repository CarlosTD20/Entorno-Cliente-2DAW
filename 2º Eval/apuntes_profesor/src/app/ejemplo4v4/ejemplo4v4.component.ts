/* Ejemplo 4v4
 - Comunicación Padre-Hijo con *ngFor Bidireccional
 - Padre ejemplo4v4
 - Hijo ejemplo4v5
*/

import { Component } from '@angular/core';
import { ARTICULOS } from '../Modelos/mock-articulos';

@Component({
  selector: 'app-ejemplo4v4',
  templateUrl: './ejemplo4v4.component.html',
  styleUrls: ['./ejemplo4v4.component.css']
})
export class Ejemplo4v4Component {

  articulos=ARTICULOS

  borrar(id:string){
    let pos=this.articulos.findIndex(a=>a.id==id)
    this.articulos.splice(pos,1)
  }
}
