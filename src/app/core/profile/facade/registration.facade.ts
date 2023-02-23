import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ProfileApi } from '../core/api/profile.api';
import { ProfileStore } from '../core/store/profile.store';

@Injectable({
    providedIn: 'root'
})
export class RegistrationFacade {
    constructor(
        private api: ProfileApi,
        private store: ProfileStore,
        private router: Router,
    ) {
    }

    register(firstName: string, birthDate: string) {
        this.api.register(firstName, birthDate).pipe(
            tap(res => {
                if (res.success) {
                    this.router.navigateByUrl('/home');
                }
            })
        ).subscribe();
    }
}
