import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PhoneValidator } from '../../../../../../core/shared/validators/phone.validator';
import { ConfirmationStepBaseComponent } from '../confirmation-step.base.component';

@Component({
    selector: 'fj-confirm-step-phone',
    templateUrl: './confirm-step-phone.component.html',
    styleUrls: ['./confirm-step-phone.component.scss']
})
export class ConfirmStepPhoneComponent extends ConfirmationStepBaseComponent implements OnInit {
    control: FormControl = new FormControl(null, [Validators.required, PhoneValidator.validPhone]);

    constructor() {
        super();
    }

    ngOnInit() {
    }

    nextButtonDisabled() {
        return this.control.invalid;
    }

    nextStep() {
        this.stepDone.next(this.control.value);
    }
}
