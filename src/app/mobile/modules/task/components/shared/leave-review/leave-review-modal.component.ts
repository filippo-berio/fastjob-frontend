import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewProfileReview } from '../../../../../../core/profile/core/data/profile-review.interface';

@Component({
    selector: 'fj-leave-review-modal',
    templateUrl: './leave-review-modal.component.html',
    styleUrls: ['./leave-review-modal.component.scss'],
})
export class LeaveReviewModalComponent {
    @Input() title: string;
    @Input() submitText: string;

    @Output() submit = new EventEmitter<NewProfileReview>;

    opened = false;
    form: FormGroup;

    open() {
        this.form = new FormGroup({
            rating: new FormControl(null, [Validators.required]),
            comment: new FormControl(null),
        });
        this.opened = true;
    }

    onSubmit() {
        this.submit.emit(this.form.value);
        this.opened = false;
    }
}
