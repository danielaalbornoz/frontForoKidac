import { Component, OnInit } from '@angular/core';
import { foro } from 'src/app/model/Foro';
import { ForoService } from 'src/app/services/Foro/foro.service';
import { Temas } from 'src/app/model/Temas';
import { TemasService } from 'src/app/services/Temas/temas.service';
import { categorias } from 'src/app/model/Categorias';
import { CategoriasService } from 'src/app/services/Categorias/categorias.service';
import { comentarios } from 'src/app/model/Comentarios';
import { ComentariosService } from 'src/app/services/Comentarios/comentarios.service';
import { usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  nuevoForo: foro[] = [];
  nuevoComent: comentarios[] = [];
  categoryList: categorias[] = [];
  temasList: Temas[] = [];
  foro: foro;

  logged: boolean = false;
  LogAdmin: boolean = false;
  show: boolean = false;

  //valor interfaz foro
  idCategoria: number;
  idTemas: number;
  userCreador: string;
  fechaForo: Date;
  contenido: string;
  titulo: string;
  descripcion: string;

  //valor interfaz temas
  idForo: number;
  nombreTema: string;
  estado: boolean;

  //valor interfaz comentario
  idForoComt: number;
  comentario: string;
  userCreadorComt: string;

  constructor(
    private foroService: ForoService,
    private temasService: TemasService,
    private categoriasService: CategoriasService,
    private comentService: ComentariosService
  ) { }

  ngOnInit(): void {
    this.getTema();
    this.getCategory();
    this.mostrarForos();

    if (localStorage.getItem("userSesion") === null) {
      this.logged = false;
    } else {
      this.logged = true;
    }

    const usuario = JSON.parse(localStorage.getItem("userSesion"))
      if (usuario.admin === true){
        this.LogAdmin = true;        
      }else{
        this.LogAdmin = false;        
      }
  }

  ////////////////////////   CREAR FORO   ////////////////////////
  crearForo() {
    console.log("creando foro")
    const user: usuario = JSON.parse(localStorage.getItem("userSesion"))
    let newForo: foro = {
      idCategoria: this.idCategoria,
      idTemas: this.idTemas,
      userCreador: user.username,
      fechaForo: this.fechaForo,
      contenido: this.contenido,
      titulo: this.titulo,
      descripcion: this.descripcion
    }
    this.foroService.postForo(newForo).subscribe(
      res => {
        console.log(res)
        this.mostrarForos()
      },
      err => {
        console.log(err)
      }
    )
    alert("Foro creado con éxito");
  }

  mostrarForos() {
    this.foroService.getForos(3).subscribe(
      foro => this.nuevoForo = foro

    )
    console.log(this.nuevoForo)
  }

  borrarForo(id) {
    this.foroService.deleteForo(id).subscribe(
      data => this.mostrarForos(),
      res => {
        console.log(res)
        this.mostrarForos()
      }
    )    
  }

  getDetalleForo(id) {
    this.foroService.getForoByID(id).subscribe(
      foro => {
        this.foro = {
          idForo: 0,
          idCategoria: 0,
          idTemas: 0,
          userCreador: "",
          fechaForo: null,
          contenido: "",
          titulo: "",
          descripcion: ""
        };
        this.foro = foro
      }
    )
    this.comentService.getComent(id).subscribe(
      nuevoComent => {
        this.nuevoComent = [];
        this.nuevoComent = nuevoComent
      }
    )

  }


  ////////////////////////   CREAR TEMA   ////////////////////////
  addTema() {
    console.log("creando tema")
    let theme: Temas = {
      idForo: this.idForo,
      nombreTema: this.nombreTema,
      estado: this.estado
    }
    this.temasService.postTemas(theme).subscribe(
      res => {
        console.log(res),
          this.getTema()
      },
      err => {
        console.log(err)
      }
    )
  }
  
  getTema() {
    this.temasService.getTemas().subscribe(
      temasList => this.temasList = temasList
    )
    console.log(this.temasList)
  }
  getCategory() {
    this.categoriasService.getCategory().subscribe(
      categoryList => this.categoryList = categoryList
    )
    console.log(this.categoryList)
  }


  ////////////////////////   COMENTARIO   ////////////////////////
  addComent(idForo) {
    console.log("creando comentario")
    const usuario = JSON.parse(localStorage.getItem("userSesion"))
    let newComt: comentarios = {
      idForo: idForo,
      comentario: this.comentario,
      userCreador: usuario.username
    }
    this.comentService.postComent(newComt).subscribe(
      res => {
        console.log(res)
        this.getComt(idForo)
      },
      err => {
        console.log(err)
      }
    )
  }

  getComt(idForo) {
    this.comentService.getComent(idForo).subscribe(
      nuevoComent => this.nuevoComent = nuevoComent
    )
    console.log(this.nuevoComent)
  }

  borrarComt(idComent, idForo) {
    this.comentService.deleteComent(idComent).subscribe(
      data => this.getComt(idForo),
      res => {
        console.log(res)
        this.getComt(idForo)
      }
    )
  }
}
