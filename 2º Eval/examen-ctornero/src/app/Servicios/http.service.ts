import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Tareas } from '../models/tareas';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'http://localhost:3000/tareas'

  password:string="123"

  constructor(
    private http: HttpClient
  ) { }

  getTareas(): Observable<Tareas[]> {
    return this.http.get<Tareas[]>(this.url)
      .pipe(retry(1))
  }

  getTareasById(id: number): Observable<Tareas> {
    return this.http.get<Tareas>(this.url + `/${id}`)
      .pipe(retry(1))
  }

  putTarea(tarea: Tareas): Observable<Tareas> {
    return this.http.put<Tareas>(this.url + `/${tarea.id}`, tarea)
      .pipe(retry(1))
  }

  deleteTarea(id: string): Observable<Tareas> {
    return this.http.delete<Tareas>(this.url + `/${id}`)
      .pipe(retry(1))
  }

  getPasswrod(){
    let pws = prompt('Introduce la contraseña: ')

    if (this.password == pws){
      return true
    } else{
      return false
    }
  }

}
