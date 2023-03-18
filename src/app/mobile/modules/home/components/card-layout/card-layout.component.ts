import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProfileInterface } from 'src/app/core/profile/core/data/profile.interface';
import { CategoryInterface } from '../../../../../core/categories/data/category.interface';
import { SwipeType } from '../../../../../core/home/data/swipe.type';
import { getProfileRepresentation } from '../../../../../core/profile/core/util/profile-representation';
import { SwipeDirection } from '../../../../../lib/ui/data/swipe-direction';
import { SwipeState } from '../../services/swipe.state';

@Component({
    selector: 'fj-card-layout',
    templateUrl: './card-layout.component.html',
    styleUrls: ['./card-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLayoutComponent {
    @Input() profile: ProfileInterface;
    @Input() categories: CategoryInterface[];

    @Output() accept = new EventEmitter();
    @Output() reject = new EventEmitter();

    private swipeTimeout = 300;
    private swipeDirectionEmitterMap = new Map<SwipeDirection, SwipeType>([
        ['left', 'accept'],
        ['right', 'reject'],
    ]);

    constructor(
        private swipeState: SwipeState,
    ) {
    }

    profileTitle() {
        return getProfileRepresentation(this.profile);
    }

    onSwipe(direction: SwipeDirection) {
        setTimeout(() => {
            this.swipeDirectionEmitterMap.get(direction) &&
            this.swipeState.swipe.next(this.swipeDirectionEmitterMap.get(direction)!);
        }, this.swipeTimeout);
    }
}
