import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, of, switchMap, tap } from 'rxjs';
import { SwipeState } from '../../../mobile/modules/home/services/swipe.state';
import { ProfileInterface } from '../../profile/core/data/profile.interface';
import { TaskInterface } from '../../task/data/task.interface';
import { SwipeType } from '../data/swipe.type';
import { SwipeApi } from '../service/swipe.api';

@Injectable({
    providedIn: 'root'
})
export class ExecutorHomeFacade {
    private _tasks$ = new BehaviorSubject<TaskInterface[]>([]);

    currentTask$ = this._tasks$.pipe(
        map(tasks => tasks[0])
    );

    constructor(
        private swipeApi: SwipeApi,
        private swipeState: SwipeState,
    ) {
    }

    init() {
        this.currentTask$.subscribe(t => console.log(t?.title))
        this.swipeState.swipe.pipe(
            switchMap(type => this.handleSwipe(type))
        ).subscribe();
        this.swipeApi.nextTasks().pipe(
        ).subscribe(tasks => this._tasks$.next(tasks));
    }

    handleSwipe(type: SwipeType) {
        const tasks = this._tasks$.value;
        const swiped = tasks.shift();
        return this.swipeApi.swipeTask(
            type,
            swiped!,
        ).pipe(
            tap(next => this._tasks$.next(next)),
        );
    }
}
