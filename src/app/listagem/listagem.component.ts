import { Component } from '@angular/core';
import { RemedioService } from '../servicos/remedio.service';
import { RemedioComponent } from '../remedio/remedio.component';
import { AuthService } from '../servicos/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'rem-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})

export class ListagemComponent {

  remedios: RemedioComponent[] = [];
  mensagem: any;
  loader = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private servico: RemedioService) {

    this.authService.authUser()
      .subscribe((resp) => {
        if (resp === null) {
          this.router.navigate(['']);
        }
      });

    this.servico.listar()
      .subscribe(
        remediosApi => {
          this.remedios = remediosApi;
          if (this.remedios.length === 0) {
            this.mensagem = 'Nenhum remédio foi cadastrado!';
          }
          this.loader = false;
        }
        , erro => {
          this.mensagem = erro;
          setTimeout(() => {
            this.mensagem = '';
          }, 3000);
          this.loader = false;
        }
      );
  }
}
