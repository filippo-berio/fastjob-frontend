import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TaskInterface } from '../../../../../core/task/data/task.interface';

@Component({
    selector: 'fj-task-list-item',
    templateUrl: './task-list-item.component.html',
    styleUrls: ['./task-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListItemComponent implements OnInit {

    @Input() task: TaskInterface;

    constructor() {
    }

    ngOnInit() {
    }

}
