import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { regiones } from '../../model/Regiones';

@Injectable({
  providedIn: 'root'
})
export class RegionesService {

  constructor(private http: HttpClient) { }
  private urlBase= 'http://localhost:8080/api';  // URL de la API

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  getRegiones(): Observable<regiones[]>{
    const url = this.urlBase+'/region'
    return this.http.get<regiones[]>(url)
  }
}
