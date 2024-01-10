/* Ejemplo 3
 - Directivas estructural *ngFor
*/

import { Component } from '@angular/core';
import { ARTICULOS } from '../Modelos/mock-articulos';
import { Articulo } from '../Modelos/articulo';

@Component({
  selector: 'app-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styleUrls: ['./ejemplo3.component.css']
})
export class Ejemplo3Component {
  articulos=ARTICULOS

  comprarArticulo(articulo:Articulo){
    console.log(articulo)
  }

}
