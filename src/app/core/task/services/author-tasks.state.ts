import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { TaskApi } from '../api/task.api';
import { TaskInterface } from '../data/task.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthorTasksState {
    private _tasks$ = new BehaviorSubject<TaskInterface[]>([]);

    constructor(
        private taskApi: TaskApi,
    ) {
    }

    tasks$(): Observable<TaskInterface[]> {
        if (!this._tasks$.value.length) {
            return this.taskApi.getAuthorTasks().pipe(
                tap(tasks => this._tasks$.next(tasks))
            )
        }
        return this._tasks$.asObservable();
    }

    addTask(task: TaskInterface) {
        const tasks = this._tasks$.value;
        tasks.push(task);
        this._tasks$.next(tasks);
    }
}
