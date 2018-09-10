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
  mensagem: any;

  constructor(private servico: RemedioService) {
    this.servico.listar()
      .subscribe(
        remediosApi => {
          this.remedios = remediosApi;


          if (this.remedios.length === 0) {
            console.log("passs");
            this.mensagem = 'Nenhum remédio foi cadastrado!';
          }
        }
        , erro => {
          console.log("passs erro");
          this.mensagem = erro;
            setTimeout(() => {
              this.mensagem = '';
            }, 3000);
        }
      );
  }
}
