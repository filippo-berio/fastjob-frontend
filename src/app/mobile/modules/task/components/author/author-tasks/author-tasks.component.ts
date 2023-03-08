import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatchInterface } from '../../../../../../core/task/data/match.interface';
import { AuthorFacade } from '../../../../../../core/task/facade/author.facade';
import { filter, map, Observable } from 'rxjs';
import { TaskInterface } from '../../../../../../core/task/data/task.interface';

@Component({
    selector: 'fj-author-tasks',
    templateUrl: './author-tasks.component.html',
    styleUrls: ['./author-tasks.component.scss'],
})
export class AuthorTasksComponent implements OnInit {

    finished$: Observable<TaskInterface[]>;
    work$: Observable<TaskInterface[]>;
    offers$: Observable<TaskInterface[]>;
    matches$: Observable<TaskInterface[]>;
    wait$: Observable<TaskInterface[]>;

    loading$: Observable<boolean>;

    @Output() openTask = new EventEmitter<TaskInterface>();

    constructor(
        private facade: AuthorFacade,
    ) {
    }

    ngOnInit() {
        this.facade.init();

        this.finished$ = this.facade.tasks$.pipe(
            map(list => list.filter(t => this.isTaskFinished(t)))
        );
        this.work$ = this.facade.tasks$.pipe(
            map(list => list.filter(t => this.isTaskInWork(t)))
        );
        this.offers$ = this.facade.tasks$.pipe(
            map(list => list.filter(t => this.isTaskOffered(t)))
        );
        this.matches$ = this.facade.tasks$.pipe(
            map(list => list.filter(t => this.isTaskWithMatches(t)))
        );
        this.wait$ = this.facade.tasks$.pipe(
            map(list => list.filter(t => this.isTaskWaiting(t)))
        );

        this.loading$ = this.facade.loading$;
    }

    onTaskClick(task: TaskInterface) {
        this.openTask.emit(task);
    }

    getMatches(task: TaskInterface): MatchInterface[] {
        return task.matches?.filter(m => !task.offers?.find(of => of.profile.id === m.executor.id)) ?? [];
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
