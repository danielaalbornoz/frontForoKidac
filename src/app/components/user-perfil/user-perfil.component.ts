import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/Usuario/usuario.service';
import { usuario } from 'src/app/model/usuario';
import { regiones } from 'src/app/model/Regiones';
import { comunas } from 'src/app/model/Comunas';
import { RegionesService } from 'src/app/services/Regiones/regiones.service';
import { ComunaService } from 'src/app/services/Comuna/comuna.service';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.component.html',
  styleUrls: ['./user-perfil.component.css']
})
export class UserPerfilComponent implements OnInit {

  collapsed = true;
  isAdmin:boolean=false;

  regionList:regiones[]=[];
  comunasList:comunas[]=[];

  region:string;
  comuna:string;

  user: usuario = {
    "nombre": "",
    "apellidoP":"",
    "apellidoM":"",
    "genero":"",
    "fecha":null,
    "correo":"",
    "username":"",
    "password":"",
    "region":"",
    "comuna":""
  }
  

  constructor(
    private usuarioService:UsuarioService,
    private regionesService: RegionesService,
    private comunaService: ComunaService,
  ) { }

  ngOnInit(): void {
    this.buscarRegion()
    const usuario = JSON.parse(localStorage.getItem("userSesion"))
      if (usuario.admin === true){
        this.isAdmin = true;
      }else{
        this.isAdmin = false;
      }  
    this.loadUser(usuario.id)    
  }

loadUser(id){
  this.usuarioService.getUserByID(id).subscribe(
   res => {
     this.user = res
     this.buscarComuna(this.user.region)
     console.log(this.user)
   }
  )
}

buscarRegion(){
  this.regionesService.getRegiones().subscribe(
    regionList => this.regionList = regionList
   
  )
  console.log(this.regionList)
}

buscarComuna(buscarRegion){
  console.log(buscarRegion)    
    this.comunaService.getComunas(buscarRegion).subscribe(
    comunasList => this.comunasList = comunasList
  )
  console.log(this.comunasList)
}

  editar(){
    this.usuarioService.putUser(this.user.id, this.user).subscribe(
    res => {
      console.log (res),
      this.user
    },
    err => {
      console.log(err)
    }
    )
    alert ("Perfil actualizado exitosamente.")
    //window.location.reload;
  }
}
