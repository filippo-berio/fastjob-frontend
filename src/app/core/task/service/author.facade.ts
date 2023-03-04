import { Injectable } from '@angular/core';
import { TaskApi } from '../api/task.api';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { TaskInterface } from '../data/task.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthorFacade {
    private _loading$ = new BehaviorSubject<boolean>(true);

    loading$ = this._loading$.asObservable();

    constructor(
        private taskApi: TaskApi,
    ) {
    }

    tasks$(): Observable<TaskInterface[]> {
        return this.taskApi.getAuthorTasks().pipe(
            tap(() => this._loading$.next(false))
        );
    }
}
