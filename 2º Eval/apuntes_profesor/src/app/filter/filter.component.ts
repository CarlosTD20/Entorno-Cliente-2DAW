import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  constructor(
    private router:Router
  ){}
  
  orden!:string
  precio!:number

  ver() {
    console.log(this.orden)
    console.log(this.precio)

    this.router.navigate(["/articulos"],
                          {queryParams:{orden:this.orden, precio:this.precio}}
                        )
    }
}
