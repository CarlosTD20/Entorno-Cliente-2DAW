import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  // @Input() title : string = '';

// El signo "!" se utiliza para inicializar la varible, es un porpiedad que ofrece TypeScript.
// Se puede hacer así o si no le pasariamos el objeto completo.
  @Input() product !: Product;
}
