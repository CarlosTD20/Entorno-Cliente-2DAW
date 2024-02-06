import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Clientes } from '../Modelos/clientes';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioHttpService {

  url: string = 'http://localhost:3000/clientes'

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Error de conexión:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend error codigo ${error.status}, mensaje: `, error.statusText);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  constructor(
    private http: HttpClient
  ) { }

  getClientes(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.url)
      .pipe(retry(1))
  }

  getClienteById(id: number): Observable<Clientes> {
    return this.http.get<Clientes>(this.url + `/${id}`)
      .pipe(retry(1))
  }

  putClientes(cliente: Clientes): Observable<Clientes> {
    return this.http.put<Clientes>(this.url + `/${cliente.id}`, cliente)
      .pipe(retry(1))
  }

  postClientes(cliente: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(this.url, cliente)
      .pipe(retry(1))
  }

  deleteClientes(): Observable<Clientes> {
    return this.http.delete<Clientes>(this.url)
      .pipe(retry(1))
  }
}

//Ahora controlamos el error en el componente y no el servicio.
//catchError(this.handleError)