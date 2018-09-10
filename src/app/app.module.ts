import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListagemComponent } from './listagem/listagem.component';
import { RemedioComponent } from './remedio/remedio.component';
import { AlteracaoComponent } from './alteracao/alteracao.component';
import { MesangeriaComponent } from './mensageria/mensageria.component';
// import { PipeTextoReduzido } from "./listagem/TitulosReduzido.pipe";

import { roteamento } from './app.router';
import { RemedioService } from './servicos/remedio.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListagemComponent,
    RemedioComponent,
    AlteracaoComponent,
    MesangeriaComponent
  //  PipeTextoReduzido
  ],
  imports: [
    BrowserModule,
    roteamento,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [RemedioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
