import { Injectable } from '@angular/core';
import { TaskApi } from '../api/task.api';
import { BehaviorSubject, filter, finalize, map, Observable, tap } from 'rxjs';
import { ExecutorTaskList } from '../data/executor-task-list.interface';
import { TaskInterface } from '../data/task.interface';

@Injectable({
    providedIn: 'root'
})
export class ExecutorFacade {
    private _loading$ = new BehaviorSubject<boolean>(true);
    private _tasks$ = new BehaviorSubject<ExecutorTaskList|null>(null)

    tasks$: Observable<ExecutorTaskList> = this._tasks$.asObservable().pipe(
        filter(list => !!list)
    ) as Observable<ExecutorTaskList>;
    loading$ = this._loading$.asObservable();

    constructor(
        private taskApi: TaskApi,
    ) {
    }

    init() {
        this.taskApi.getExecutorTasks().pipe(
            tap(tasks => this._tasks$.next(tasks)),
            finalize(() => this._loading$.next(false))
        ).subscribe();
    }

    canAcceptOffer$(task: TaskInterface): Observable<boolean> {
        return this._tasks$.pipe(
            map(tasks => !!tasks!.offers.find(t => t.id === task.id))
        );

    }

    acceptOffer(task: TaskInterface) {
        this.taskApi.acceptOffer(task).subscribe(tasks => this._tasks$.next(tasks));
    }

    canGoChat$(task: TaskInterface): Observable<boolean> {
        return this._tasks$.pipe(
            map(tasks => !!tasks!.matches.find(t => t.id === task.id))
        );
    }

    goChat(task: TaskInterface) {
        console.log('GO TO CHAT ON ', task.title)
    }
}
