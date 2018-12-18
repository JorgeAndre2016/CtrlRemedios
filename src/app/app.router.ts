import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { AlteracaoComponent } from './alteracao/alteracao.component';
import { LoginComponent } from './login/login.component';

const rotas: Routes = [
    { path: '', component: LoginComponent },
    { path: 'list', component: ListagemComponent },
    { path: 'cadastro', component: AlteracaoComponent},
    { path: 'cadastro/:idRemedio', component: AlteracaoComponent},
    { path: '**', redirectTo: ''}
];

export const roteamento = RouterModule.forRoot(rotas);
