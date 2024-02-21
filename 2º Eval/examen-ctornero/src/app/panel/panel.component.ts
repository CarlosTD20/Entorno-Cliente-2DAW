import { Component } from '@angular/core';
import { HttpService } from '../Servicios/http.service';
import { Tareas } from '../models/tareas';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  tareas: Tareas[] = []

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    this.http.getTareas().subscribe(datos => {
      this.tareas = datos})
  }

  borrar(id:string){
    this.http.deleteTarea(id).subscribe( datos => this.ngOnInit())
  }
}

