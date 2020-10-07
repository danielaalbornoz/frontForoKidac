import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/Usuario/usuario.service';
import { usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    console.log(this.username)
  }

  username: string;
  password: string;
  retorno: boolean;
  paso: boolean;
  user: usuario;
  myID: number;

  login() {
    if (!this.username || !this.password ){
      alert ("Ingrese todos los datos solicitados")
      return
    }
    this.usuarioService.getLogin(this.username, this.password).subscribe(
      res => {
        console.log(res)
        this.user = res
        if (this.user.id === 0){
          alert ("Usted no se encuentra registrado con un usuario válido. Favor registrarse.");        
          location.href="registro";
          return false;
        }

        if (this.user.estado === false){
          alert ("Loggeo inhabilidato. USUARIO BANNEADO.");
          return false;
        }

        localStorage.setItem("userSesion", JSON.stringify(this.user))
        if (this.user.admin === true) {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['']);
        }
        
      },
      error => {
        console.error(error)
      },
      
    )
  }

  goRegister() {
    this.router.navigate(['registro']);
  }
}
