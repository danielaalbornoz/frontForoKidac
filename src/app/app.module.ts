import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {AppMaterialModule} from  './app-material/app-material.module';

//rutas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//componentes
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { ComidaComponent } from './topicos/comida/comida.component';
import { SonidoyaudioComponent } from './topicos/sonidoyaudio/sonidoyaudio.component';
import { AnimeComponent } from './topicos/anime/anime.component';
import { CarrosComponent } from './topicos/carros/carros.component';
import { VideoJuegosComponent } from './topicos/video-juegos/video-juegos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgramacionComponent } from './topicos/programacion/programacion.component';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { UserPerfilComponent } from './components/user-perfil/user-perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    ComidaComponent,
    SonidoyaudioComponent,
    AnimeComponent,
    CarrosComponent,
    VideoJuegosComponent,
    NavbarComponent,
    ProgramacionComponent,
    AdminComponent,
    UserPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
