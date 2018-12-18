import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RemedioComponent } from '../remedio/remedio.component';
import { RemedioService } from '../servicos/remedio.service';
import { AuthService } from '../servicos/auth.service';

@Component({
  selector: 'rem-alteracao',
  templateUrl: './alteracao.component.html',
  styles: ['form {margin-top: 30px;} button {margin-left: 2px;}']
})

export class AlteracaoComponent implements OnInit {

  remedio = new RemedioComponent();
  mensagem = '';
  loader = false;
  deleteVisible = false;

  constructor(
    private rota: ActivatedRoute,
    private roteador: Router,
    private conexao: RemedioService,
    private authService: AuthService
  ) {
    this.authService.authUser()
    .subscribe((resp) => {
      if (resp === null) {
        this.roteador.navigate(['']);
      }
    });
  }

  ngOnInit() {
    this.rota.params.subscribe(
      parametros => {
        if (parametros.idRemedio && this.mensagem.length === 0) {
          this.loader = true;
          this.conexao.consultar(parametros.idRemedio)
            .subscribe((remedioApi) => {
              this.loader = false;
              this.deleteVisible = true;
              this.remedio.id = parametros.idRemedio;
              this.remedio.contempquantosdias = remedioApi[0].$value;
              this.remedio.nome = remedioApi[1].$value;
              this.remedio.observacao = remedioApi[2].$value;
              this.remedio.qtdestoque = remedioApi[3].$value;
              this.remedio.qtdpdia = remedioApi[4].$value;
            });
        }
      }
    );
  }

  mensageria(tempo = 2000) {
    setTimeout(() => {
      this.roteador.navigate(['']),
        this.mensagem = '';
    }, tempo);
  }

  salvar() {
    this.calculoContemParaQuantosDias(this.remedio);
    if (this.remedio.id) {
      this.conexao.alterar(this.remedio);
      this.mensagem = `Remédio alterado com sucesso!`;
      this.mensageria(5000);
    } else {
      this.conexao.cadastrar(this.remedio);
      this.mensagem = 'Remédio cadastrado com sucesso!';
      this.remedio = new RemedioComponent();
      this.mensageria(5000);
      this.loader = false;
    }
  }

  deletar(remedio: RemedioComponent) {
    this.conexao.deletar(remedio.id);
    this.mensagem = 'Remédio deletado com sucesso!';
    this.remedio = new RemedioComponent();
    this.mensageria(5000);
  }

  calculoContemParaQuantosDias(remedio: RemedioComponent) {
    this.loader = true;
    remedio.contempquantosdias = remedio.qtdestoque / remedio.qtdpdia;
  }
}
