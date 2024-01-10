/* Ejemplo 4
 - Comunicación Padre-Hijo (Individual)
 - Padre ejemplo4
 - Hijo ejemplo4v1
*/
import { Component } from '@angular/core';
import { ARTICULOS } from '../Modelos/mock-articulos';
import { Articulo } from '../Modelos/articulo';

@Component({
  selector: 'app-ejemplo4',
  templateUrl: './ejemplo4.component.html',
  styleUrls: ['./ejemplo4.component.css']
})
export class Ejemplo4Component {

  articulos=ARTICULOS
  articuloSeleccionado!:Articulo

  verArticulo(articulo:Articulo){
    this.articuloSeleccionado=articulo
  }
}
