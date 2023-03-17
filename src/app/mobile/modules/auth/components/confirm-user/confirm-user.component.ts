import { Component, ComponentRef, OnInit, Type, ViewChild } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ConfirmationFacade } from '../../../../../core/auth/facade/confirmation.facade';
import { DynamicDirective } from '../../../../../core/shared/directives/dynamic.directive';
import { UserConfirmationStepType } from '../../../../../core/auth/core/store/auth.store';
import { ConfirmStepCodeComponent } from '../confirmation-steps/confirm-step-code/confirm-step-code.component';
import { ConfirmStepPhoneComponent } from '../confirmation-steps/confirm-step-phone/confirm-step-phone.component';
import { ConfirmationStepBaseComponent } from '../confirmation-steps/confirmation-step.base.component';

@Component({
    selector: 'fj-auth-confirm-user',
    templateUrl: './confirm-user.component.html',
    styleUrls: ['../confirmation-steps/confirm-step-code/confirm-step-code.component.scss']
})
export class ConfirmUserComponent implements ViewWillEnter {
    @ViewChild(DynamicDirective, {
        static: true
    }) stepContainer: DynamicDirective;

    loading = false;

    private stepComponents: Record<UserConfirmationStepType, Type<ConfirmationStepBaseComponent>> = {
        'phone': ConfirmStepPhoneComponent,
        'code': ConfirmStepCodeComponent
    };
    private step : UserConfirmationStepType = 'phone';
    private componentRef: ComponentRef<ConfirmationStepBaseComponent>;
    private stepDoneSubscription: Subscription;

    constructor(
        private confirmationFacade: ConfirmationFacade,
    ) {
    }

    ionViewWillEnter() {
        this.confirmationFacade.step$.subscribe(step => this.setStep(step));
        this.confirmationFacade.loading$.subscribe(value => this.loading = value);
        this.confirmationFacade.init();
    }

    private nextStep(value: string) {
        switch (this.step) {
            case 'phone':
                this.stepDoneSubscription.unsubscribe();
                this.confirmationFacade.setPhone(value);
                this.confirmationFacade.sendConfirmationCode();
                break;

            case 'code':
                this.confirmationFacade.confirmCode(value);
                break;
        }
    }

    private setStep(step: UserConfirmationStepType) {
        this.step = step;
        const component = this.stepComponents[step];
        const viewContainerRef = this.stepContainer.viewContainerRef;
        viewContainerRef.clear();
        this.componentRef = viewContainerRef.createComponent<ConfirmationStepBaseComponent>(component);
        this.stepDoneSubscription = this.componentRef.instance.stepDone.subscribe((value) => this.nextStep(value))
    }
}
