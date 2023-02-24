import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
        this.formGroup = this.facade.buildForm();
    }

    submit() {
        if (!this.formGroup.valid) {
            this.formGroup.markAsDirty();
            return;
        }

        this.facade.register();
    }
}
