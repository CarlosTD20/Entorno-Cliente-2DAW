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

  mensaje:string=""
  ok:boolean= true

  constructor(
    private httpService:ServicioHttpService
  ){}


  ngOnInit(){
    this.httpService.getClientes().subscribe(
      datos => {
        this.clientes = datos
        this.ok=true
      },
      error =>{
        if (error.status == 404){
          this.ok = false
          this.mensaje = 'ERROR. No existe la petición.'
        }
      } 
    )
  }

  ver(id: number) {
    this.httpService.getClienteById(id).subscribe()
  }
      
}
