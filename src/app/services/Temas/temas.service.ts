import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Temas } from '../../model/Temas';


@Injectable({
  providedIn: 'root'
})
export class TemasService {

  constructor(private http: HttpClient) { }

  private urlBase= 'http://localhost:8080/api';
 
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  postTemas(temas:Temas): Observable<boolean>{
    const url = this.urlBase+'/tema'
    return this.http.post<boolean>(url, temas, this.httpOptions)
  } 

  getTemas(): Observable<Temas[]>{
    const url = this.urlBase+'/tema/list'
    return this.http.get<Temas[]>(url)
  }

  getTemasAdmin(): Observable<Temas[]>{
    const url = this.urlBase+'/tema/admin'
    return this.http.get<Temas[]>(url)
  }

  bannearTemas(id_temas): Observable<number>{
    const url = this.urlBase+'/tema/ban/'+id_temas
    return this.http.put<number>(url,this.httpOptions)
  }
  
  borrarTemas(id_temas): Observable<number>{//@PathVariable
    const url=this.urlBase+'/tema/del/'+id_temas
    return this.http.delete<number>(url, this.httpOptions)
  }
}
