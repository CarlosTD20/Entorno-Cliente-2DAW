import { Component } from '@angular/core';
import { Clientes } from '../Modelos/clientes';
import { ServicioHttpService } from '../Servicios/servicio-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nuevocliente',
  templateUrl: './nuevocliente.component.html',
  styleUrls: ['./nuevocliente.component.css']
})
export class NuevoclienteComponent {


  neuvoCliente: Clientes = {
    id: 0,
    nombre: '',
    cargo: ''
  }
  error: boolean = false
  textoError: string = ''

  constructor(
    private httpService: ServicioHttpService,
    private route: Router
  ) { }

  guardar() {
    this.httpService.postClientes(this.neuvoCliente)
      .subscribe(datos => this.route.navigate(['/clientes']),
        error => {
          this.error = true
          this.textoError = 'Ha ocurrido un error:' + error.statusText
        }
      )
  }

}
