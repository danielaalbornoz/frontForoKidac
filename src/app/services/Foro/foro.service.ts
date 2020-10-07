import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { foro } from '../../model/Foro';

@Injectable({
  providedIn: 'root'
})
export class ForoService {

  constructor(private http: HttpClient) { }

  private urlBase= 'http://localhost:8080/api';
 
  httpOptions = { headers: new HttpHeaders ({ 'Content-Type': 'application/json' }) };

  postForo(forum:foro): Observable<boolean>{//@RequestBody
    const url= this.urlBase+'/crearForo'
    return this.http.post<boolean>(url, forum, this.httpOptions)
  }

  getForos(idCategoria): Observable<foro[]>{//Lista
    const url = this.urlBase+'/foro/category/'+ idCategoria
    return this.http.get<foro[]>(url)
  }  
  
  getForoByID(id): Observable<foro>{
    const url = this.urlBase + '/foro/' + id
    return this.http.get<foro>(url, this.httpOptions)
  }

  deleteForo(id): Observable<number>{//@PathVariable
    const url = this.urlBase+'/foro/'+id
    return this.http.delete<number>(url, this.httpOptions)
  }

  putForo(id, forum:foro): Observable<number>{//@PathVariable
    const url = this.urlBase+'/foro/'+id
    return this.http.put<number>(url, forum, this.httpOptions)
  }
}
