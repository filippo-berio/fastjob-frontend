import { Injectable } from '@angular/core';
import { NewProfileReview, ProfileReview } from '../../profile/core/data/profile-review.interface';
import { ProfileStore } from '../../profile/core/store/profile.store';
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
        private profileStore: ProfileStore,
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
        this.taskApi.acceptOffer(task.id).subscribe(tasks => this._tasks$.next(tasks));
    }

    canGoChat$(task: TaskInterface): Observable<boolean> {
        return this._tasks$.pipe(
            map(tasks => !tasks!.swipes.find(t => t.id === task.id))
        );
    }

    canLeaveReview$(task: TaskInterface): Observable<boolean> {
        return this._tasks$.pipe(
            map(tasks => !tasks!.finished.find(t => t.data.id === task.id)?.review)
        )
    }

    leaveReview(task: TaskInterface, review: NewProfileReview) {
        const tasks = this._tasks$.value!;
        tasks.finished.forEach(t => {
            if (t.data.id === task.id) {
                t.review = {
                    rating: review.rating,
                    comment: review.comment,
                    target: task.author,
                    author: this.profileStore.profile$.value!
                };
            }
        })
        this._tasks$.next(tasks);
        this.taskApi.leaveTaskAuthorReview(task.id, review.rating, review.comment).subscribe();
    }

    taskReview$(task: TaskInterface): Observable<ProfileReview | undefined> {
        return this._tasks$.pipe(
            map(tasks => tasks?.finished.find(t => t.data.id === task.id)?.review)
        );
    }
}
