import { Component } from '@angular/core';
import { ArticulosService } from '../Servicios/articulos.service';
import { Articulo } from '../Modelos/articulo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-see-article',
  templateUrl: './see-article.component.html',
  styleUrls: ['./see-article.component.css']
})
export class SeeArticleComponent {

  articuloSeleccionado!:Articulo | null

  id !:string
  nombre!:string
  descripcion !:string
  precio !:number

  constructor(
    private articuloService:ArticulosService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ){}

  ngOnInit(){
    this.id = this.activatedRoute.snapshot.params['id']
    this.articuloSeleccionado = this.articuloService.getArticulo(this.id)

    if (this.articuloSeleccionado) {
      this.id = this.articuloSeleccionado.id
      this.nombre = this.articuloSeleccionado.nombre
      this.descripcion = this.articuloSeleccionado.descripcion
      this.precio = this.articuloSeleccionado.precio
    }
  }

    modificar(){
      if (this.articuloSeleccionado !=null){
        let articuloModificado:Articulo={id:this.id,
                                        nombre:this.nombre,
                                        descripcion:this.descripcion,
                                        precio:this.precio
                                      }
        this.articuloService.putArticulo(articuloModificado)
      }
      this.articuloSeleccionado=null
      this.router.navigate(["/articulos"])
    }
}
