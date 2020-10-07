import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { comentarios } from '../../model/Comentarios';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http: HttpClient) { }
  private urlBase= 'http://localhost:8080/api';  // URL de la API

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  postComent(coment:comentarios): Observable<boolean>{
    const url=this.urlBase+'/comt'
    return this.http.post<boolean>(url, coment, this.httpOptions)
  }

  getComent(idForo): Observable<comentarios[]>{
    const url = this.urlBase+'/comt/' + idForo
    return this.http.get<comentarios[]>(url)
  }

  deleteComent(id): Observable<number>{
    const url = this.urlBase+'/comt/'+id
    return this.http.delete<number>(url, this.httpOptions)
  }

}
