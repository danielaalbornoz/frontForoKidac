import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { categorias } from '../../model/Categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }
  private urlBase= 'http://localhost:8080/api';  // URL de la API

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  getCategory(): Observable<categorias[]>{
    const url = this.urlBase+'/categ'
    return this.http.get<categorias[]>(url)
  }
}
