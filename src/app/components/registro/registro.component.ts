import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/Usuario/usuario.service';
import { usuario } from 'src/app/model/usuario';
import { RegionesService } from 'src/app/services/Regiones/regiones.service';
import { regiones } from 'src/app/model/Regiones';
import { ComunaService } from 'src/app/services/Comuna/comuna.service';
import { comunas } from 'src/app/model/Comunas';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(
    private usuarioService : UsuarioService,
    private regionesService:RegionesService,
    private comunaService:ComunaService
    ) { }

  ngOnInit(): void {
    this.buscarRegion();
  }
  nuevoUsuario:usuario[]=[];
  regionList:regiones[]=[];
  comunasList:comunas[]=[];

  nombre:string;
  apellidoP:string;
  apellidoM:string;
  genero:string;
  fecha:Date;
  correo:string;
  username:string;
  password:string;
  region:string;
  comuna:string;
  admin:boolean;
  estado:boolean;

  check:boolean=true;
  correoValido:boolean;

  registro(){
    this.usuarioService.ifExistsCorreo(this.correo).subscribe(
      res => this.correoValido = res
    )
    setTimeout(() => {
      console.log("validando datos")
      if(this.correoValido == true){
        alert("Correo ya registrado")
      }else{
        if (this.check==false){
          alert("Acepte los términos y condiciones")
        }else{
          let nuevo:usuario ={
            nombre:this.nombre,
            apellidoP:this.apellidoP,
            apellidoM:this.apellidoM,
            genero:this.genero,
            fecha:this.fecha,
            correo:this.correo,
            username:this.username,
            password:this.password,
            region:this.region,
            comuna:this.comuna,
            admin:this.admin,
            estado:this.estado
          }
          this.usuarioService.postUser(nuevo).subscribe(
            res => { 
              console.log(res) 
            },
            err => { 
              console.log(err) 
            }
          )
            alert("Registro EXITOSO. Bienvenido a la counidad de KIDAC");
            window.location.href="login";
        }
      }
    });
  }
  
  buscarRegion(){
    this.regionesService.getRegiones().subscribe(
      regionList => this.regionList = regionList
     
    )
    console.log(this.regionList)
  }

  buscarComuna(buscarRegion){
    console.log(this.region)    
      this.comunaService.getComunas(buscarRegion).subscribe(
      comunasList => this.comunasList = comunasList
    )
    console.log(this.comunasList)
  }
}
