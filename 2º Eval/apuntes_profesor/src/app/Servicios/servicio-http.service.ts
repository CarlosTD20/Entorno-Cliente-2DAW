import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from '../Modelos/clientes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioHttpService {

  url:string = 'http://localhost:3000/clientes'

  constructor(
    private http:HttpClient 
  ) { }

  getClientes():Observable<Clientes[]>{
    return this.http.get<Clientes[]>(this.url)
  }

  getClienteById(id:number):Observable<Clientes>{
    return this.http.get<Clientes>(this.url + `/${id}`)
  }
}
