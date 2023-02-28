import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Swipeable } from '../../../../../core/home/data/swipeable.interface';
import { getProfileRepresentation } from '../../../../../core/profile/core/util/profile-representation';

@Component({
    selector: 'fj-swipe-card',
    templateUrl: './swipe-card.component.html',
    styleUrls: ['./swipe-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwipeCardComponent implements OnInit {
    @Input() card: Swipeable;
    @Output() accept = new EventEmitter();
    @Output() reject = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    profileTitle() {
        return getProfileRepresentation(this.card.task.author);
    }

    onAccept() {
        this.accept.emit();
    }

    onReject() {
        this.reject.emit();
    }
}
