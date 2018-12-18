import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
    private user: Observable<firebase.User>;
    private authState: any;

    constructor(
        private afAuth: AngularFireAuth,
        private router: Router
    ) {
        this.user = afAuth.authState;
    }

    // Return user
    authUser() {
        return this.user;
    }

    // Return id use, case are authenticated
    get currentUserId(): string {
        return this.authState !== null ? this.authState.uid : '';
    }

    // Método to signin with email and password
    login(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
            // .then((resolve) => {
            //     this.router.navigate(['list']);
            // });
    }

    logout() {
        return this.afAuth.auth.signOut();
            // .then((resolve) => {
            //     this.router.navigate(['']);
            // });
    }
}
