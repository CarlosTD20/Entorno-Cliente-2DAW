import { Component } from '@angular/core';
import { ServicioHttpService } from '../Servicios/servicio-http.service';
import { Clientes } from '../Modelos/clientes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  clientes!: Clientes[];

  mensaje: string = ""
  ok: boolean = true

  constructor(
    private httpService: ServicioHttpService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {
    this.httpService.getClientes().subscribe(
      datos => {
        this.clientes = datos
        this.ok = true
      },
      error => {
        if (error.status == 404) {
          this.ok = false
          this.mensaje = 'ERROR. No existe la petición.'
        }
      }
    )
    this.httpService.getExercise().subscribe(datos => console.log(datos))
  }

  ver(id: number) {
    this.httpService.getClienteById(id).subscribe()
  }

  delete(cliente: Clientes) {

    this.httpService.deleteClientes(cliente)
      .subscribe(datos => this.ngOnInit())
  }

}
