import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Swipeable } from '../../../../../core/home/data/swipeable.interface';

@Component({
    selector: 'fj-executor-card',
    templateUrl: './executor-card.component.html',
    styleUrls: ['./executor-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExecutorCardComponent {
    @Input() card: Swipeable;
}
