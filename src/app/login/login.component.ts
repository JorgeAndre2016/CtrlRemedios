import { Component } from '@angular/core';
import { AuthService } from '../servicos/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'rem-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    public email: string;
    public password: string;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
        this.authService.authUser()
        .subscribe((resp) => {
          if (resp !== null) {
            this.router.navigate(['list']);
          }
        });
    }

    public signUp(): void {
        this.authService.login(this.email, this.password)
            .then((resolve) => {
                this.router.navigate(['list']);
            });
    }
}
