import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TaskInterface } from '../../../../../../core/task/data/task.interface';

@Component({
    selector: 'fj-task-card',
    templateUrl: './task-card.component.html',
    styleUrls: ['./task-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCardComponent {
    @Input() task: TaskInterface;

}
