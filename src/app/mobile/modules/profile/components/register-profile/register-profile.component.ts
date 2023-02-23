import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateValidators } from '../../../../../core/shared/validators/date.validators';
import { RegistrationFacade } from '../../../../../core/profile/facade/registration.facade';

@Component({
  selector: 'fj-register-profile',
  templateUrl: './register-profile.component.html',
  styleUrls: ['./register-profile.component.scss']
})
export class RegisterProfileComponent implements OnInit {
    formGroup: FormGroup;

    constructor(
        private facade: RegistrationFacade,
    ) {
    }

    ngOnInit() {
        this.formGroup = new FormGroup({
            firstName: new FormControl(null, [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(64),
            ]),
            birthDate: new FormControl(null, [
                Validators.required,
                DateValidators.date,
                DateValidators.yearsPassed(18),
            ])
        });
    }

    submit() {
        if (!this.formGroup.valid) {
            this.formGroup.markAsDirty();
            return;
        }

        this.facade.register(
            this.formGroup.get('firstName')!.value,
            this.formGroup.get('birthDate')!.value,
        );
    }
}
