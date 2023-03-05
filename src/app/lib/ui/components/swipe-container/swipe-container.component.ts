import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { SwipeDirection } from '../../data/swipe-direction';

@Component({
    selector: 'fj-swipe-container',
    templateUrl: './swipe-container.component.html',
    styleUrls: ['./swipe-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwipeContainerComponent {

    @Output() swipe = new EventEmitter<SwipeDirection>();

    constructor() {
    }

    onSwipe(direction: SwipeDirection) {
        this.swipe.emit(direction);
    }
}
