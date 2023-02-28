import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'fj-no-swipe-cards',
    templateUrl: './no-swipe-cards.component.html',
    styleUrls: ['./no-swipe-cards.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoSwipeCardsComponent {
}
