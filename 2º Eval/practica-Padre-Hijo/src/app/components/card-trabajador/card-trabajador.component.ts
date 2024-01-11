import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Trabajador } from 'src/app/modelos/trabajador'; 
import { TRABAJDORES } from 'src/app/modelos/trabajadores';

// importar Input, Output y Event Emitter from '@angular/core'
// importar Trabajador

@Component({
  selector: 'app-card-trabajador',
  templateUrl: './card-trabajador.component.html',
  styleUrls: ['./card-trabajador.component.css']
})
export class CardTrabajadorComponent implements OnInit{
 
  // decorador input para el trabajador que se le pasa desde el padre
  @Input()  trabajadorhijo !:Trabajador

  // decxorador output para el evento likeTrabajador  
  @Output() likeHijo: EventEmitter<Trabajador> = new EventEmitter()
  // decxorador output para el evento unlikeTrabajador  
  @Output() unlikeHijo: EventEmitter<Trabajador> = new EventEmitter()
  // decxrador output para el evento borraTrabajador  
  @Output() borrarHijo: EventEmitter<Trabajador> = new EventEmitter()
    
  constructor() { }

  ngOnInit(): void {
  }

  //metodo que recibe un trabajador y emite el evento likeTrabajador con el id del trabajador
  like(trabajador:Trabajador){
    this.likeHijo.emit(trabajador)
  }

  //metodo que recibe un trabajador y emite el evento unlikeTrabajador con el id del trabajador
  unlike(trabajador:Trabajador){
    this.unlikeHijo.emit(trabajador)
  }

  //metodo que recibe un trabajador y emite el evento borraTrabajador con el id del trabajador
  eliminar(trabajador:Trabajador){
    this.borrarHijo.emit(trabajador)
  }
}
