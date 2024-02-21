import { Component } from '@angular/core';
import { HttpService } from '../Servicios/http.service';
import { Tareas } from '../models/tareas';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarea-finalizar',
  templateUrl: './tarea-finalizar.component.html',
  styleUrls: ['./tarea-finalizar.component.css']
})
export class TareaFinalizarComponent {

  detail: Tareas ={
    id: '',
    nombre: '',
    estado: ''
  }

  constructor(
    private http: HttpService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){
    this.activateRoute.params
      .subscribe(params => this.http.getTareasById(params['id'])
        .subscribe(datos => this.detail = datos)
      )
  }

  finalizar() {
    this.detail.estado = 'Realizada'

    this.http.putTarea(this.detail).subscribe()
    this.router.navigate(['/tareas'])
  }

}
