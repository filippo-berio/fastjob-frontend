import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthorFacade } from '../../../../../../core/task/facade/author.facade';
import { map, Observable } from 'rxjs';
import { TaskInterface } from '../../../../../../core/task/data/task.interface';

@Component({
    selector: 'fj-author-tasks',
    templateUrl: './author-tasks.component.html',
    styleUrls: ['./author-tasks.component.scss'],
})
export class AuthorTasksComponent implements OnInit {

    tasks$: Observable<TaskInterface[]>;

    loading$: Observable<boolean>;

    @Output() openTask = new EventEmitter<TaskInterface>();
    tasks: TaskInterface[] = [];

    constructor(
        private facade: AuthorFacade,
    ) {
    }

    ngOnInit() {
        this.facade.init();

        this.tasks$ = this.facade.tasks$.pipe(
            map(list => list.sort(this.compareTasksForSorting))
        );
        this.facade.tasks$.subscribe(list => this.tasks = list);

        this.loading$ = this.facade.loading$;
    }

    onTaskClick(task: TaskInterface) {
        this.openTask.emit(task);
    }

    private compareTasksForSorting(a: TaskInterface, b: TaskInterface): number {
        const valueFn = (t: TaskInterface) => {
            switch (true) {
                case this.isTaskInWork(t):
                    return 0;
                case this.isTaskOffered(t):
                    return 1;
                case this.isTaskWithMatches(t):
                    return 2;
                case this.isTaskWaiting(t):
                    return 3;
                case this.isTaskFinished(t):
                default:
                    return 4;
            }
        }
        return valueFn(a) > valueFn(b) ? 1 : -1;
    }

    private isTaskFinished(task: TaskInterface): boolean {
        return task.status === 'finished';
    }

    private isTaskInWork(task: TaskInterface): boolean {
        return task.status === 'work';
    }

    private isTaskOffered(task: TaskInterface): boolean {
        return task.status === 'offered';
    }

    private isTaskWithMatches(task: TaskInterface): boolean {
        return !!task.matches && task.matches.length > 0 && task.status === 'wait';
    }

    private isTaskWaiting(task: TaskInterface): boolean {
        return task.status === 'wait' && !this.isTaskWithMatches(task);
    }
}
