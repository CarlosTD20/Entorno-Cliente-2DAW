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

  selectedArticulo : Articulo = this.articulos[3]

  // ngOnInit(){
  //   console.log('ngOnInit...')
  //   setTimeout(()=>{alert('BotonActivo')
  //                 this.botonActivo = false},5000)
  // }

  botonActivo : boolean = true;
  verD : Boolean = false
  verC : Boolean = false
  isLogged : boolean = false;


  activar() {
    this.botonActivo = false;
  }

  desactivar(){
    this.botonActivo = true;
  }

  seleccionarArticulo(){
    let posArticulo : string | null = prompt('Introduce la posición del artículo:...')

    if(posArticulo == null){
      alert('Error. Articulo no seleccionado')
    } else {
      if(isNaN(parseInt(posArticulo))){
        alert('Error. Selección no númerica')
      }else{
        if ((parseInt(posArticulo))>=this.articulos.length || (parseInt(posArticulo))< 0){
          alert('Error. No existe el artículo')
        } else{
          this.selectedArticulo = this.articulos[parseInt(posArticulo)];
        }
      }
    }
  }

  comprarArticulo(articulo : Articulo) {
    console.log(articulo.id)
    }

    ocultarContainer() {
      this.verC = false
    }
    verContainer() {
      this.verC =  true
    }
}
