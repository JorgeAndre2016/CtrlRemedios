import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { RemedioComponent } from '../remedio/remedio.component';
import { Observable } from 'rxjs';


@Injectable()
export class RemedioService {

  remedies: FirebaseListObservable<RemedioComponent[]>;
  remedie: RemedioComponent;

  constructor(private db: AngularFireDatabase) { }

  listar(): FirebaseListObservable<RemedioComponent[]> {
    return this.db.list('remedies', {
      query: {
        orderByKey: true
      }
    });
  }

  // consultar(idRemedio: String): Observable<RemedioComponent> {
  //   return this.conexao.get<RemedioComponent>(`${url}/${idRemedio}`);
  // }

  // cadastrar(remedio: RemedioComponent): Observable<Object> {
  //   return this.conexao.post(url, remedio, cabecalho)
  //     .map(
  //       () => ({ mensagem: `Remédio "${remedio.nome}" cadastrado com sucesso!` })
  //     );
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
