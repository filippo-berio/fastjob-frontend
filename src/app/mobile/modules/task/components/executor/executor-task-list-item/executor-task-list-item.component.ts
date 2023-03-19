import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';
import { TaskInterface } from '../../../../../../core/task/data/task.interface';

@Component({
    selector: 'fj-executor-task-list-item',
    templateUrl: './executor-task-list-item.component.html',
    styleUrls: ['./executor-task-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExecutorTaskListItemComponent implements OnInit {
    @Input() task: TaskInterface;

    iconsOutlet: TemplateRef<any>;

    constructor(
    ) {
    }

    ngOnInit() {

    }
}
