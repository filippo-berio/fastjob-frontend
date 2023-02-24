import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateValidators } from '../../../shared/validators/date.validators';
import { ProfileInterface } from '../data/profile.interface';

@Injectable({
    providedIn: 'root'
})
export class ProfileFormBuilder {
    private nameValidators = [
        Validators.minLength(2),
        Validators.maxLength(64),
    ];

    buildRegisterForm(): FormGroup {
        return new FormGroup({
            firstName: new FormControl(null, [
                ...this.nameValidators,
                Validators.required,
            ]),
            birthDate: new FormControl(null, [
                Validators.required,
                DateValidators.date,
                DateValidators.yearsPassed(18),
            ])
        });
    }

    buildProfileForm(profile: ProfileInterface): FormGroup {
        return new FormGroup({
            firstName: new FormControl(profile.firstName, [
                ...this.nameValidators,
                Validators.required,
            ]),
            lastName: new FormControl(profile.lastName, this.nameValidators),
            description: new FormControl(profile.description, [
                Validators.required,
            ]),
        });
    }
}
