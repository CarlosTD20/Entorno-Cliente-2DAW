import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tareas } from '../models/tareas';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {

  @Input() tarea!: Tareas

  @Output() borrarTarea: EventEmitter<string> = new EventEmitter()

  borrar(id:string){
    this.borrarTarea.emit(id)
  }

}
