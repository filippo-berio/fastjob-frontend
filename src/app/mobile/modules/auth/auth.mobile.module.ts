import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { TuiButtonModule, TuiLinkModule, TuiLoaderModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiInputModule, TuiInputPhoneModule } from '@taiga-ui/kit';
import { TextMaskModule } from 'angular2-text-mask';
import { SharedModule } from '../../../core/shared/shared.module';
import { ConfirmUserComponent } from './components/confirm-user/confirm-user.component';
import {
    ConfirmStepCodeComponent
} from './components/confirmation-steps/confirm-step-code/confirm-step-code.component';
import {
    ConfirmStepPhoneComponent
} from './components/confirmation-steps/confirm-step-phone/confirm-step-phone.component';

const routes: Route[] = [
    {
        path: '',
        component: ConfirmUserComponent,
    }
];

@NgModule({
    declarations: [
        ConfirmUserComponent,
        ConfirmStepPhoneComponent,
        ConfirmStepCodeComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        NgSwitch,
        NgSwitchCase,
        SharedModule,
        ReactiveFormsModule,
        TuiInputPhoneModule,
        TuiButtonModule,
        TuiInputModule,
        TextMaskModule,
        TuiLoaderModule,
        NgIf,
        DatePipe,
        TuiLinkModule,
        TuiTextfieldControllerModule,
    ]
})
export class AuthMobileModule {
}
