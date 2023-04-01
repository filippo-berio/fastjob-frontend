import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskInterface } from '../../../../../../core/task/data/task.interface';
import { ExecutorFacade } from '../../../../../../core/task/facade/executor.facade';
import { Observable } from 'rxjs';
import { ExecutorTaskList } from '../../../../../../core/task/data/executor-task-list.interface';

@Component({
    selector: 'fj-executor-tasks',
    templateUrl: './executor-tasks.component.html',
    styleUrls: ['./executor-tasks.component.scss'],
})
export class ExecutorTasksComponent implements OnInit {
    tasks: ExecutorTaskList;
    loading$: Observable<boolean>;

    @Output() openTask = new EventEmitter<TaskInterface>();

    constructor(
        private facade: ExecutorFacade,
    ) {
    }

    ngOnInit() {
        this.facade.init();
        this.facade.tasks$.subscribe(tasks => this.setTasks(tasks!));
        this.loading$ = this.facade.loading$;
    }

    onTaskClick(task: TaskInterface) {
        this.openTask.emit(task);
    }

    getFinishedTasks(): TaskInterface[] {
        return this.tasks.finished.map(t => t.data);
    }

    private setTasks(tasks: ExecutorTaskList) {
        this.tasks = tasks;
    }
}
