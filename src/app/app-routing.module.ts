import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { ComidaComponent } from './topicos/comida/comida.component';
import { AnimeComponent } from './topicos/anime/anime.component';
import { CarrosComponent } from './topicos/carros/carros.component';
import { SonidoyaudioComponent } from './topicos/sonidoyaudio/sonidoyaudio.component';
import {VideoJuegosComponent} from './topicos/video-juegos/video-juegos.component';
import {ProgramacionComponent} from './topicos/programacion/programacion.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserPerfilComponent } from './components/user-perfil/user-perfil.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path:"registro", component: RegistroComponent},
  {path:"login", component: LoginComponent},
  {path: "comida", component: ComidaComponent},
  {path: "anime", component: AnimeComponent},
  {path: "carros", component: CarrosComponent},
  {path: "audio", component: SonidoyaudioComponent},
  {path: "Video-juegos", component: VideoJuegosComponent},
  {path: "programa", component: ProgramacionComponent},
  {path: "admin", component: AdminComponent},
  {path: "perfil", component: UserPerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
