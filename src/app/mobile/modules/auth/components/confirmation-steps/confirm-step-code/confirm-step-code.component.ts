import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import { ConfirmationFacade } from '../../../../../../core/auth/facade/confirmation.facade';
import { ConfirmationStepBaseComponent } from '../confirmation-step.base.component';

@Component({
    selector: 'fj-confirm-step-code',
    templateUrl: './confirm-step-code.component.html',
    styleUrls: ['./confirm-step-code.component.scss']
})
export class ConfirmStepCodeComponent extends ConfirmationStepBaseComponent implements OnInit {
    control = new FormControl<any>(null, [Validators.required, Validators.pattern('^\\d{4}$')]);

    maskOptions = {
        guide: true,
        mask: [/\d/, /\d/, /\d/, /\d/],
    };

    retries?: number;
    secondsLeft: number;

    constructor(
        private facade: ConfirmationFacade,
    ) {
        super();
    }

    ngOnInit() {
        this.facade.smsTimeoutSeconds$.subscribe(left => this.secondsLeft = left);

        this.facade.retries$.subscribe(retries => this.retries = retries);

        this.facade.loading$.pipe(
            filter(loading => !loading)
        ).subscribe(() => this.control.setValue(null));

        this.control.valueChanges.pipe(
            filter(() => this.control.valid)
        ).subscribe((value) => this.stepDone.next(value));
    }

    sendCode() {
        this.facade.sendConfirmationCode();
    }
}
