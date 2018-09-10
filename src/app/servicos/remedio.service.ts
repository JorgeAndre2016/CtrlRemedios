import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { RemedioComponent } from '../remedio/remedio.component';
import { Observable } from 'rxjs';


@Injectable()
export class RemedioService {

  remedies: FirebaseListObservable<RemedioComponent[]>;

  constructor(private db: AngularFireDatabase) { }

  listar(): FirebaseListObservable<RemedioComponent[]> {

    const tes = this.db.list('remedies/', {
      query: {
        orderByKey: true
      }
    });

    console.log(tes.forEach(res => {
      console.log(res);

    }));

    return tes;
  }

  cadastrar(remedio: RemedioComponent) {
    this.remedies = this.listar();

    return this.remedies.push({
      nome: remedio.nome,
      qtdpdia: remedio.qtdpdia,
      qtdestoque: remedio.qtdestoque,
      contempquantosdias: remedio.contempquantosdias,
      observacao: remedio.observacao
    });

    // const retorno = `Remédio ${remedio.nome} cadastrado com sucesso!`;
    // return Observable.of(retorno);
    // return this.conexao.post(url, remedio, cabecalho)
    //   .map(
    //     () => ({ mensagem: `Remédio "${remedio.nome}" cadastrado com sucesso!` })
    //   );
  }

  // consultar(idRemedio: String): Observable<RemedioComponent> {
  //   return this.conexao.get<RemedioComponent>(`${url}/${idRemedio}`);
  // }


  // alterar(remedio: RemedioComponent): Observable<Object> {
  //   return this.conexao.put(`${url}/${remedio._id}`, remedio, cabecalho)
  //     .map(
  //       () => ({ mensagem: `Remédio "${remedio.nome}" alterado com sucesso!` })
  //     );
  // }

  // deletar(remedio: RemedioComponent): Observable<Object> {
  //   return this.conexao.delete(`${url}/${remedio._id}`)
  //     .map(
  //       () => ({ mensagem: `Remédio "${remedio.nome}" deletado com sucesso!` })
  //     );
  // }
}
