import { Component } from '@angular/core';
import { AuthService } from '../servicos/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'rem-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    public autenticado: boolean;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
        this.authService.authUser()
            .subscribe((r) => {
                this.autenticado = true;
            });
    }

    public signOut(): void {
        this.authService.logout()
            .then((resolve) => {
                this.router.navigate(['']);
            });
    }
}
