import { Component } from '@angular/core';
import { RemedioService } from '../servicos/remedio.service';
import { RemedioComponent } from '../remedio/remedio.component';

@Component({
  selector: 'rem-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})

export class ListagemComponent {

  remedios: RemedioComponent[] = [];

  constructor(private servico: RemedioService) {
    this.servico.listar()
      .subscribe(
        remediosApi => this.remedios = remediosApi
        , erro => console.log(erro)
      );
      console.log(this.remedios);

  }
}
