import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { TuiButtonModule, TuiLabelModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiInputModule, TuiTextAreaModule } from '@taiga-ui/kit';
import { ModalInputComponent } from './components/modal-input/modal-input.component';
import { ModalTextareaComponent } from './components/modal-textarea/modal-textarea.component';

const declarations = [
    ModalInputComponent,
    ModalTextareaComponent,
];

@NgModule({
    declarations,
    imports: [
        CommonModule,
        MatDialogModule,
        TuiTextAreaModule,
        TuiButtonModule,
        TuiInputModule,
        TuiTextfieldControllerModule,
        FormsModule,
        TuiLabelModule,
        ReactiveFormsModule,
    ],
    exports: declarations,
})
export class SharedMobileModule {
}
