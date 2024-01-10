import { Component, Input } from '@angular/core';
import { Articulo } from '../Modelos/articulo';

@Component({
  selector: 'app-ejemplo4v1',
  templateUrl: './ejemplo4v1.component.html',
  styleUrls: ['./ejemplo4v1.component.css']
})
export class Ejemplo4v1Component {

  @Input() articulo!:Articulo

}
