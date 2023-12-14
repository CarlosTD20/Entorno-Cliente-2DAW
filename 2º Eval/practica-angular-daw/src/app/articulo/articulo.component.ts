import { Component } from '@angular/core';
import { ARTICULOS } from '../modelos/list-articulos';
import { Articulo } from '../modelos/articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {

  articulos = ARTICULOS

  articulo : Articulo = this.articulos[3]
  
  botonActivo : boolean = true;

  ngOnInit(){
    console.log('ngOnInit...')
    setTimeout(()=>{alert('BotonActivo')
                  this.botonActivo = false},5000)
  }
}
