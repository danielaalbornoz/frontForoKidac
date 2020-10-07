import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  isLogin:boolean=false;
  isAdmin:boolean=false;
  isUser:boolean=false;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("userSesion") === null){
    this.isLogin = false;
    this.isUser = false;
    this.isAdmin = false;
    }else{
      this.isLogin = true;
      const usuario = JSON.parse(localStorage.getItem("userSesion"))
      if (usuario.admin === true){
        this.isAdmin = true;
        this.isUser = true;
      }else{
        this.isAdmin = false;
        this.isUser = true;
      }
    }    
  }
  cerrarSesion(){
    localStorage.clear()
    location.href="login";
  }

  goReg(){
    location.href="registro"
  }

  goLogin(){
    location.href="login"
  }

  goPerfil(){
    location.href="perfil"
  }

  goAdmin(){
    location.href="admin"
  }
}  
