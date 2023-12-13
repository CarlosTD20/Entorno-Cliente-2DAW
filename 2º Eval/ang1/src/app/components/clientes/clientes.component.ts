import { Component } from '@angular/core';
import { Cliente } from 'src/app/Modelos/cliente';
import { clientes } from 'src/app/Modelos/clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  cliente1 : Cliente = {
    id:1,
    nombre :"Pepe",
    ciudad : "Valencia"
  }

  nombres : string[] = ['Pepe', 'Juan', 'Jorge', 'Joan', 'Sergi']
  ciudades : Array <string> = ['Valencia', 'Alicante', 'Castellon']
  // cliente !: Cliente

  listaClientes = clientes
}
