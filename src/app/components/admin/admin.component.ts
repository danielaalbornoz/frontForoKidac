import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/Usuario/usuario.service';
import { Temas } from 'src/app/model/Temas';
import { TemasService } from 'src/app/services/Temas/temas.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
  columnaTabla1:string []=[
    "nombre",
    "apellidoP",
    "apellidoM",
    "genero",
    "fecha",
    "correo",
    "username",
    "psswrd",
    "id_region",
    "id_comuna"
  ]

  columnasTabla2:string []=[
    "nombreTema"
  ]

  userLista:usuario[]=[];
  temasLista:Temas[]=[];
  estado:number;
  id:number;

  constructor(
    private usuarioService:UsuarioService,
    private temasService:TemasService
  ) { }

  ngOnInit(): void {
    this.getListaUsuarios();
    this.getListaTemas();
  }

    ///////////   USUARIO   ////////////
  getListaUsuarios(){
    console.log("se imprime")
    this.usuarioService.getListaUser().subscribe(
      userLista => this.userLista = userLista
    )
    console.log(this.userLista)
  }
  eliminarUser(id){
    this.usuarioService.deleteUser(id).subscribe(
        data => this.getListaUsuarios()
      )
  }
 banneoUsuario(correo){
    this.usuarioService.bannearUser(correo).subscribe(
      res =>{
        this.estado = res
        this.getListaUsuarios();
      } 
    )    
  }

    ///////////   TEMAS   ////////////
  getListaTemas(){
    console.log("se imprime")
    this.temasService.getTemasAdmin().subscribe(
      temasLista => this.temasLista = temasLista
    )
    console.log(this.temasLista)
  }
  banneoTema(ID_temas){
    this.temasService.bannearTemas(ID_temas).subscribe(
      res =>{
        this.estado = res
      this.getListaTemas();
      } 
    )    
  }
  eliminarTemas(ID_temas){
    this.temasService.borrarTemas(ID_temas).subscribe(
        data => this.getListaTemas()
      )
  }
}
