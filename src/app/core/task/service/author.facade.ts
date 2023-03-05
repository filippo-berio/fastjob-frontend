import { Injectable } from '@angular/core';
import { TaskApi } from '../api/task.api';
import { BehaviorSubject, finalize, map, Observable, tap } from 'rxjs';
import { TaskInterface } from '../data/task.interface';
import { ProfileInterface } from '../../profile/core/data/profile.interface';
import { MatchInterface } from '../data/match.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthorFacade {
    private _loading$ = new BehaviorSubject<boolean>(true);
    private _tasks$ = new BehaviorSubject<TaskInterface[]>([]);

    tasks$ = this._tasks$.asObservable();
    loading$ = this._loading$.asObservable();

    constructor(
        private taskApi: TaskApi,
    ) {
    }

    init() {
        this.tasks$ = this.taskApi.getAuthorTasks().pipe(
            finalize(() => this._loading$.next(false))
        );
        this.tasks$.subscribe();
    }

    openChat(match: MatchInterface) {
        console.log('NAVIGATE TO CHAT WITH ', match.executor.firstName);
    }

    makeOffer(match: MatchInterface) {
        this.taskApi.makeOffer(match.task, match.executor).subscribe();
    }

    isTaskOffered(task: TaskInterface, executor: ProfileInterface): boolean {
        return !!task.offers?.find(o => o.profile.id === executor.id);
    }

    canFinishTask$(task: TaskInterface): Observable<boolean> {
        console.log(this._tasks$.value);
        return this.tasks$.pipe(
            map(tasks => {
                console.log(tasks.find(t => t.id === task.id));
                return tasks.find(t => t.id === task.id)?.status === 'work'
            })
        );
    }

    finishTask(task: TaskInterface, rating: number, comment?: string) {
        this.taskApi.finishTask(task, rating, comment).pipe(
            tap(tasks => this._tasks$.next(tasks))
        ).subscribe();
    }
}
