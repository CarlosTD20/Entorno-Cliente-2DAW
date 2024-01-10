import { Component, OnInit } from '@angular/core';

// importar Input, Output y Event Emitter from '@angular/core'
// importar Trabajador
 

@Component({
  selector: 'app-card-trabajador',
  templateUrl: './card-trabajador.component.html',
  styleUrls: ['./card-trabajador.component.css']
})
export class CardTrabajadorComponent implements OnInit {
  
  // decorador input para el trabajador que se le pasa desde el padre
  
  // decxorador output para el evento likeTrabajador  
  // decxorador output para el evento unlikeTrabajador  
  // decxrador output para el evento borraTrabajador  
    
  constructor() { }

  ngOnInit(): void {
  }

  //metodo que recibe un trabajador y emite el evento likeTrabajador con el id del trabajador
  like(trabajador:Trabajador){}

  //metodo que recibe un trabajador y emite el evento unlikeTrabajador con el id del trabajador
  unlike(trabajador:Trabajador){}

  //metodo que recibe un trabajador y emite el evento borraTrabajador con el id del trabajador
  eliminar(trabajador:Trabajador){}
}