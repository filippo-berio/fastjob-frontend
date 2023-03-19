import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TaskInterface } from '../../../../../../core/task/data/task.interface';

@Component({
    selector: 'fj-executor-task-type-list',
    templateUrl: './executor-task-type-list.component.html',
    styleUrls: ['./executor-task-type-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExecutorTaskTypeListComponent implements OnInit {
    @Input() title: string;
    @Input() icon: string;
    @Input() tasks: TaskInterface[];

    constructor() {
    }

    ngOnInit() {
    }

}
