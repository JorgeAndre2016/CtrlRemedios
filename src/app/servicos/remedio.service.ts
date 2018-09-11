import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { RemedioComponent } from '../remedio/remedio.component';

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
    return tes;
  }

  cadastrar(remedio: RemedioComponent) {
    this.remedies = this.listar();
    this.remedies.push({
      nome: remedio.nome,
      qtdpdia: remedio.qtdpdia,
      qtdestoque: remedio.qtdestoque,
      contempquantosdias: remedio.contempquantosdias,
      observacao: remedio.observacao
    });
  }

  consultar(idRemedio: String): FirebaseListObservable<any> {
    const path = `/remedies/${idRemedio}`;
    return this.db.list(path);
  }

  alterar(remedio: RemedioComponent) {

    const path = `/remedies/${remedio.id}`;

    firebase.database().ref(path).update({
      nome: remedio.nome,
      observacao: remedio.observacao,
      qtdestoque: remedio.qtdestoque,
      qtdpdia: remedio.qtdpdia,
      contempquantosdias: remedio.contempquantosdias
    });
  }

  deletar(idRemedio: string) {
    const path = `/remedies/${idRemedio}`;
    firebase.database().ref(path).remove();
  }
}
