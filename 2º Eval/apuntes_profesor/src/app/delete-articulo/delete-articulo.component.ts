import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from '../Modelos/articulo';
import { ArticulosService } from '../Servicios/articulos.service';

@Component({
  selector: 'app-delete-articulo',
  templateUrl: './delete-articulo.component.html',
  styleUrls: ['./delete-articulo.component.css']
})
export class DeleteArticuloComponent {

  articulo!: Articulo

  constructor(
    private router:Router,
    private rutaActiva:ActivatedRoute,
    private articuloService:ArticulosService
  ){}

  ngOnInit(){
    let idToDelete = this.rutaActiva.snapshot.params['id']
    this.articulo = this.articuloService.getArticulo(idToDelete)
  }

  borrar(){
    this.articuloService.deleteArticulo(this.articulo.id)
    this.router.navigate(['/articulos'])
  }
}
