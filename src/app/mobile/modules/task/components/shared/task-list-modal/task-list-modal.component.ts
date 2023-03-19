import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskInterface } from '../../../../../../core/task/data/task.interface';

@Component({
    selector: 'fj-task-list-modal',
    templateUrl: './task-list-modal.component.html',
    styleUrls: ['./task-list-modal.component.scss'],
})
export class TaskListModalComponent implements OnInit {
    @Output() clickTask = new EventEmitter<TaskInterface>();

    tasks: TaskInterface[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    open(list: TaskInterface[]) {
        this.tasks = list;
    }

    click(task: TaskInterface) {
        this.clickTask.emit(task);
    }
}
