import { Component } from '@angular/core';
import { Clientes } from '../Modelos/clientes';
import { ServicioHttpService } from '../Servicios/servicio-http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-cliente',
  templateUrl: './detail-cliente.component.html',
  styleUrls: ['./detail-cliente.component.css']
})
export class DetailClienteComponent {

  detailCliente!:Clientes | null

  id!:any
  nombre!:string
  cargo!:string


  constructor(
    private httpService:ServicioHttpService,
    private router:Router,
    private activateRouter: ActivatedRoute
  ){}

  ngOnInit(){
    this.id = this.activateRouter.snapshot.params['id']
    // this.activateRouter.params.subscribe(params => this.id = params{'id'})

     this.httpService.getClienteById(this.id).subscribe(datos => {
      this.detailCliente = datos

      this.id = this.detailCliente.id
      this.nombre = this.detailCliente.nombre
      this.cargo = this.detailCliente.cargo
     })
  }
}
