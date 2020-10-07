import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario } from '../../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  
  private urlBase= 'http://localhost:8080/api';  // URL de la API

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  postUser(user:usuario){//@RequestBody
    const url=this.urlBase+'/user'
    return this.http.post(url, user, this.httpOptions)
  }

  getLogin(username:String, password:String): Observable<usuario>{//@RequestParam (cuando solicitan parametros en específico)
    const url=`${this.urlBase}/login?username=${username}&password=${password}`;
    return this.http.get<usuario>(url)
  }

  getListaUser(): Observable<usuario[]>{//lista
    const url=this.urlBase+'/user'
    return this.http.get<usuario[]>(url)
  }

  getUserByID(id): Observable <usuario>{//@PathVariable
    const url = this.urlBase + '/user/' + id
    return this.http.get<usuario>(url, this.httpOptions)
  }

  deleteUser(id): Observable<number>{//@PathVariable
    const url=this.urlBase+'/user/'+id
    return this.http.delete<number>(url, this.httpOptions)
  }

  bannearUser(correo): Observable<number>{
    const url=this.urlBase+'/user/ban/'+correo
    return this.http.put<number>(url,null,this.httpOptions)
  }

  putUser(id,user:usuario): Observable<number>{
    const url= this.urlBase+'/user/'+id
    return this.http.put<number>(url,user,this.httpOptions)
  }

  ifExistsCorreo(correo:String): Observable<boolean>{
    const url=this.urlBase+'/mail/'+correo
    return this.http.get<boolean>(url, this.httpOptions)
  }
}
