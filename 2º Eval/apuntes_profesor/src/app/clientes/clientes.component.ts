import { Component } from '@angular/core';
import { ServicioHttpService } from '../Servicios/servicio-http.service';
import { Clientes } from '../Modelos/clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  clientes!: Clientes[];

  constructor(
    private httpService:ServicioHttpService
  ){}


  ngOnInit(){
    this.httpService.getClientes().subscribe(datos => this.clientes = datos )
  }

  ver(id: number) {
    this.httpService.getClienteById(id).subscribe()
  }
      
}
