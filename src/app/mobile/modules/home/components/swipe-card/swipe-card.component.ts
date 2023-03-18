import {
    Component,
    EventEmitter,
    Output,
} from '@angular/core';
import { SwipeDirection } from '../../../../../lib/ui/data/swipe-direction';

@Component({
    selector: 'fj-swipe-card',
    templateUrl: './swipe-card.component.html',
    styleUrls: ['./swipe-card.component.scss'],
})
export class SwipeCardComponent {
    @Output() accept = new EventEmitter();
    @Output() reject = new EventEmitter();

    private swipeDirectionEmitterMap = new Map<SwipeDirection, EventEmitter<any>>([
        ['left', this.accept],
        ['right', this.reject],
    ]);

    constructor() {
    }


    onSwipe(direction: SwipeDirection) {
        this.swipeDirectionEmitterMap.get(direction)?.emit();
    }

}
