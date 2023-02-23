import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputDateModule, TuiInputModule } from '@taiga-ui/kit';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiInputModule,
        TuiInputDateModule,
        TuiButtonModule,
    ],
    providers: [
    ],
    exports: [
        RouterModule,
    ]
})
export class ProfileModule {
}
