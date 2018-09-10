import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RemedioComponent } from '../remedio/remedio.component';
import { RemedioService } from '../servicos/remedio.service';

@Component({
    selector: 'rem-alteracao',
    templateUrl: './alteracao.component.html',
    styles: ['form {margin-top: 30px;} button {margin-left: 2px;}']
})

export class AlteracaoComponent implements OnInit {

    remedio = new RemedioComponent();
    mensagem: any;

    constructor(private rota: ActivatedRoute,
        private roteador: Router,
        private conexao: RemedioService) {}

    ngOnInit() {
    }
    //     this.rota.params.subscribe(
    //         parametros => {
    //             if (parametros.idRemedio) {
    //                 this.conexao.consultar(parametros.idRemedio)
    //                     .subscribe(
    //                         remedioApi => this.remedio = remedioApi
    //                     );
    //             }
    //         }
    //     );
    // }

    mensageria(tempo = 2000) {
        setTimeout(() => {
          this.roteador.navigate(['']),
          this.mensagem = '';
        }, tempo);
    }

    salvar() {

        this.calculoContemParaQuantosDias(this.remedio);

        // if (this.remedio._id) {
        //     this.conexao.alterar(this.remedio)
        //         .subscribe(
        //             mensagem => {
        //               this.mensagem = mensagem,
        //               this.mensageria(5000);
        //             }
        //             , erro => console.log(erro)
        //         );
        // } else {
        // this.conexao.cadastrar(this.remedio)
        //     .subscribe(
        //         mensagem => {
        //           this.mensagem = mensagem;
        //           this.remedio = new RemedioComponent();
        //           this.mensageria(5000);
        //         }
        //         , erro => console.log(erro)
        //     );
        // }
    }

    deletar(remedio: RemedioComponent) {
        // this.conexao.deletar(remedio)
        //     .subscribe(
        //         mensagem => {
        //           this.mensagem = mensagem;
        //           this.remedio = new RemedioComponent();
        //           this.mensageria(5000);
        //         }
        //     , erro => console.log(erro)
        //     );
    }

    calculoContemParaQuantosDias(remedio: RemedioComponent) {
        remedio.contempquantosdias = remedio.qtdestoque / remedio.qtdpdia;
    }
}
