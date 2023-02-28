import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Swipeable } from '../../../../../core/home/data/swipeable.interface';

@Component({
    selector: 'fj-task-card',
    templateUrl: './task-card.component.html',
    styleUrls: ['./task-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCardComponent {
    @Input() card: Swipeable;

}
