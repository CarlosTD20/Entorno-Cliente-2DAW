import { Component } from '@angular/core';
import { Clientes } from '../Modelos/clientes';
import { ServicioHttpService } from '../Servicios/servicio-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletecliente',
  templateUrl: './deletecliente.component.html',
  styleUrls: ['./deletecliente.component.css']
})
export class DeleteclienteComponent {

  cliente: Clientes = {
    id: 0,
    nombre: '',
    cargo: ''
  }

  constructor(
    private httpService: ServicioHttpService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activateRoute.params
      .subscribe(params => this.httpService.getClienteById(params['id'])
        .subscribe(datos => this.cliente = datos)
      )
  }

  borrar() {
    this.httpService.deleteClientes(this.cliente)
      .subscribe(datos => this.router.navigate(['/clientes']))
  }

}
