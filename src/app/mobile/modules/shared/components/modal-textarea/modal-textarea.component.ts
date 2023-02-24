import { ChangeDetectionStrategy, Component, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'fj-modal-textarea',
    templateUrl: './modal-textarea.component.html',
    styleUrls: ['./modal-textarea.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalTextareaComponent {

    label: string;
    submitText: string = 'Сохранить';
    control: FormControl;
    valueEmitter = new EventEmitter<string>();

    submit() {
        this.valueEmitter.emit(this.control.value);
    }
}
