import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListagemComponent } from './listagem/listagem.component';
import { RemedioComponent } from './remedio/remedio.component';
import { AlteracaoComponent } from './alteracao/alteracao.component';
import { MesangeriaComponent } from './mensageria/mensageria.component';
import { LoaderComponent } from './loader/loader.component';

import { roteamento } from './app.router';
import { RemedioService } from './servicos/remedio.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { AuthService } from './servicos/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListagemComponent,
    RemedioComponent,
    AlteracaoComponent,
    MesangeriaComponent,
    LoaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    roteamento,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [RemedioService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
