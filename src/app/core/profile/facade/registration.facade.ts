import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { ProfileApi } from '../core/api/profile.api';
import { ProfileFormBuilder } from '../core/form/profile.form-builder';
import { ProfileStore } from '../core/store/profile.store';

@Injectable({
    providedIn: 'root'
})
export class RegistrationFacade {
    registerForm: FormGroup;

    constructor(
        private api: ProfileApi,
        private store: ProfileStore,
        private router: Router,
        private profileFormBuilder: ProfileFormBuilder,
    ) {
    }

    buildForm(): FormGroup {
        this.registerForm = this.profileFormBuilder.buildRegisterForm();
        return this.registerForm;
    }

    register() {
        this.api.register(
            this.registerForm.get('firstName')?.value!,
            this.registerForm.get('birthDate')?.value!,
        ).pipe(
            tap(res => {
                if (res.success) {
                    this.router.navigateByUrl('/home');
                }
            })
        ).subscribe();
    }
}
