import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProfileInterface } from 'src/app/core/profile/core/data/profile.interface';
import { CategoryInterface } from '../../../../../core/categories/data/category.interface';
import { SwipeType } from '../../../../../core/home/data/swipe.type';
import { HomeFacade } from '../../../../../core/home/facade/home.facade';
import { getProfileRepresentation } from '../../../../../core/profile/core/util/profile-representation';
import { SwipeDirection } from '../../../../../lib/ui/data/swipe-direction';

@Component({
    selector: 'fj-card-layout',
    templateUrl: './card-layout.component.html',
    styleUrls: ['./card-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLayoutComponent implements OnInit {
    @Input() profile: ProfileInterface;
    @Input() categories: CategoryInterface[];

    @Output() accept = new EventEmitter();
    @Output() reject = new EventEmitter();

    private swipeDirectionEmitterMap = new Map<SwipeDirection, SwipeType>([
        ['left', 'accept'],
        ['right', 'reject'],
    ]);

    constructor(
        private facade: HomeFacade,
    ) {
    }

    ngOnInit() {
    }

    profileTitle() {
        return getProfileRepresentation(this.profile);
    }

    onSwipe(direction: SwipeDirection) {
        this.swipeDirectionEmitterMap.get(direction) &&
            this.facade.swipe(this.swipeDirectionEmitterMap.get(direction)!);
    }
}
