import { Injectable } from '@angular/core';
import { TaskApi } from '../api/task.api';
import { BehaviorSubject, finalize, Observable } from 'rxjs';
import { ExecutorTaskList } from '../data/executor-task-list.interface';

@Injectable({
    providedIn: 'root'
})
export class ExecutorFacade {
    private _loading$ = new BehaviorSubject<boolean>(true);

    loading$ = this._loading$.asObservable();

    constructor(
        private taskApi: TaskApi,
    ) {
    }

    tasks$(): Observable<ExecutorTaskList> {
        return this.taskApi.getExecutorTasks().pipe(
            finalize(() => this._loading$.next(false))
        );
    }
}
