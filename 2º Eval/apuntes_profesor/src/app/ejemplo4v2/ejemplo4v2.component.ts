/* Ejemplo 4
 - Comunicación Padre-Hijo con *ngFor
 - Padre ejemplo4v2
 - Hijo ejemplo4v3
*/

import { Component } from '@angular/core';
import { ARTICULOS } from '../Modelos/mock-articulos';

@Component({
  selector: 'app-ejemplo4v2',
  templateUrl: './ejemplo4v2.component.html',
  styleUrls: ['./ejemplo4v2.component.css']
})
export class Ejemplo4v2Component {

  articulos=ARTICULOS
}
