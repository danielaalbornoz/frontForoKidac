import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { comunas } from '../../model/Comunas';

@Injectable({
  providedIn: 'root'
})
export class ComunaService {

  constructor(private http: HttpClient) { }
  private urlBase= 'http://localhost:8080/api';  // URL de la API

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  getComunas(idRegion): Observable<comunas[]>{
    const url = this.urlBase+'/comuna/'+idRegion
    return this.http.get<comunas[]>(url, this.httpOptions)
  }
}
