/* Ejemplo 1
 - Uso de Bootstrap
 - Creación de una interface en carpeta Modelos
 - Creación de un mock de articulos en carpeta modelos
 - Data Binding: Interpolación {{}} y Property Binding []
 - Componente ejemplo1 para mostrar un articulo en card de bootstrap
 - Constructor y ngOnInit
 */

import { Component } from '@angular/core';
import { ARTICULOS } from '../Modelos/mock-articulos';




@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component {

  constructor(){
    console.log("Constructor...")
  }

  ngOnInit(){
    console.log("ngOnInit...")
    setTimeout(()=>this.botonActivo=false,5000)
  }

articulos=ARTICULOS
articulo=this.articulos[1]

botonActivo=true

}
