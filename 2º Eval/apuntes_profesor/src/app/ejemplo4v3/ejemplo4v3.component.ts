import { Component, Input } from '@angular/core';
import { Articulo } from '../Modelos/articulo';

@Component({
  selector: 'app-ejemplo4v3',
  templateUrl: './ejemplo4v3.component.html',
  styleUrls: ['./ejemplo4v3.component.css']
})
export class Ejemplo4v3Component {

  @Input() articulo!:Articulo

}
