import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  constructor(
    private router: Router
  ) { }

  precio!: number
  orden!: string

  ver() {
    // console.log(this.orden)
    // console.log(this.precio)

    this.router.navigate(["/articulosFiltrados"],
      { queryParams: { precio: this.precio, orden: this.orden } }
    )
  }
}
