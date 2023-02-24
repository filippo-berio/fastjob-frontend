import { ChangeDetectionStrategy, Component, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'fj-modal-input',
    templateUrl: './modal-input.component.html',
    styleUrls: ['./modal-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalInputComponent {

    form: FormGroup;
    labels: any;
    submitText: string = 'Сохранить';
    onSubmit = new EventEmitter();

    getLabel(control: string) {
        return this.labels[control];
    }

    submit() {
        this.onSubmit.emit();
    }

    getControlNames() {
        return Object.keys(this.form.value);
    }
}
