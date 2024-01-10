import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Articulo } from '../Modelos/articulo';

@Component({
  selector: 'app-ejemplo4v5',
  templateUrl: './ejemplo4v5.component.html',
  styleUrls: ['./ejemplo4v5.component.css']
})
export class Ejemplo4v5Component {

  @Input() articulo!:Articulo
  @Output() borrarArticulo: EventEmitter<string> = new EventEmitter()

  borrar(id:string){
    this.borrarArticulo.emit(id)
  }

}
