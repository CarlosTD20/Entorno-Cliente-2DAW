import { Component } from '@angular/core';
import { HttpService } from '../Servicios/http.service';
import { Tareas } from '../models/tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  tareas: Tareas[] = []
  totalTareas: number = 0
  tareasPendientes: number = 0
  tareasfinalizadas: number = 0
  estadoFiltrado: string = 'Todas'

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    this.http.getTareas().subscribe(datos => {
      this.tareas = datos

      this.totalTareas = datos.length

      this.tareasPendientes = datos.filter(tarea => tarea.estado == 'Pendiente').length
      this.tareasfinalizadas = datos.filter(tarea => tarea.estado == 'Realizada').length

    })
  }

  filtrarTareas() {
    if (this.estadoFiltrado === 'Todas') {
      this.http.getTareas().subscribe(datos => this.tareas = datos)
    } else {
      this.http.getTareas().subscribe(datos => {
        this.tareas = datos.filter(tarea => tarea.estado == this.estadoFiltrado)
      })
    }
  }
}
