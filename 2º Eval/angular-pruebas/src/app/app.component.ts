import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
              './app.component.css',
              './bootstrap.min.css'
            ]
})
export class AppComponent {
  title = 'Proyeceto de Pruebas de Angular, Carlos Tornero';

  http = inject(HttpClient)
  products : Product[] = [];

  changeTitle(){
    this.title = 'This is the new title changed by function'
  }

  ngOnInit(){
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
              .subscribe((data) => {
                this.products = data;
              })
  }
}
