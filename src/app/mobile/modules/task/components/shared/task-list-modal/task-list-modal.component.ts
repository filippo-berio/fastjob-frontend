import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskInterface } from '../../../../../../core/task/data/task.interface';

@Component({
    selector: 'fj-task-list-modal',
    templateUrl: './task-list-modal.component.html',
    styleUrls: ['./task-list-modal.component.scss'],
})
export class TaskListModalComponent implements OnInit {
    @Output() clickTask = new EventEmitter<TaskInterface>();

    opened = false;
    tasks: TaskInterface[] = [];
    disclaimer?: string;

    initialBreakpoint = 0.6;
    breakpoints = [0, 0.6, 0.8];

    constructor() {
    }

    ngOnInit() {
    }

    open(list: TaskInterface[], disclaimer: string = 'Дисклеймер') {
        this.tasks = list;
        this.disclaimer = disclaimer;

        if (!list.length) {
            this.breakpoints = [0, 0.3];
            this.initialBreakpoint = 0.2;
        }

        this.opened = true;
    }

    click(task: TaskInterface) {
        this.clickTask.emit(task);
    }
}
