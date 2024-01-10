/* Ejemplo 3v1
 - Directivas estructural *ngIf y *ngSwitch
*/

import { Component } from '@angular/core';
import { ARTICULOS } from '../Modelos/mock-articulos';

@Component({
  selector: 'app-ejemplo3v1',
  templateUrl: './ejemplo3v1.component.html',
  styleUrls: ['./ejemplo3v1.component.css']
})
export class Ejemplo3v1Component {

    verD:boolean=false
    verC:boolean=false
    articulos=ARTICULOS

    isLoggedIn:boolean=true
    estadoCivil:string="casado"

    verDiv(){
      this.verD=true
    }

    ocultarDiv(){
      this.verD=false
    }
    verContainer(){
      this.verC=true
    }

    ocultarContainer(){
      this.verC=false
    }
}
