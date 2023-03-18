import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsStore } from '../core/store/credentials.store';

@Injectable({
    providedIn: 'root'
})
export class LoginFacade {
    constructor(
        private router: Router,
        private credentials: CredentialsStore,
    ) {
    }

    logout() {
        this.credentials.clear();
        this.router.navigateByUrl('/auth');
    }
}
