import { Component } from '@angular/core';
import { Articulo } from '../Modelos/articulo';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../Servicios/articulos.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent {

  constructor( private router : Router, 
               private servicioArticulos:ArticulosService,
               private rutaActiva:ActivatedRoute
               ){}
 
    ngOnInit(){
      this.id=this.rutaActiva.snapshot.params['id']
    }

    id !:string
    nombre!:string
    descripcion !:string
    precio !:number

    guardar() {
      let newArticle:Articulo={id:this.id,
        nombre:this.nombre,
        descripcion:this.descripcion,
        precio:this.precio
      }
        this.servicioArticulos.addArticulo(newArticle)
        this.router.navigate(['/articulos'])
    }

    cancelar() {
      this.router.navigate(['/articulos'])
    }

}
