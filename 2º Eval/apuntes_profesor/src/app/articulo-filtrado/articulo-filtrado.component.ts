import { Component } from '@angular/core';
import { ArticulosService } from '../Servicios/articulos.service';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../Modelos/articulo';

@Component({
  selector: 'app-articulo-filtrado',
  templateUrl: './articulo-filtrado.component.html',
  styleUrls: ['./articulo-filtrado.component.css']
})
export class ArticuloFiltradoComponent {

  constructor(
    private articuloService:ArticulosService,
    private rutaActiva:ActivatedRoute
  ){}

  ngOnInit(){
    let precio!:number;
    let orden!:string;
    this.rutaActiva.queryParams.subscribe( params => {precio=params['precio']
                                                      orden=params['orden']
                                                      this.articulos=this.articuloService.filtrarArticulos(precio,orden)
                                                      // console.log(orden)
                                                      // console.log(precio)
                                                    })
  }

  articulos!:Articulo[]
}
