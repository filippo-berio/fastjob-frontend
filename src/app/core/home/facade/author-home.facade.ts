import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { SwipeState } from '../../../mobile/modules/home/services/swipe.state';
import { ProfileInterface } from '../../profile/core/data/profile.interface';
import { createNullBehaviorSubject } from '../../shared/util/nullable-behavior-subject';
import { TaskInterface } from '../../task/data/task.interface';
import { AuthorTasksState } from '../../task/services/author-tasks.state';
import { SwipeApi } from '../service/swipe.api';

@Injectable({
    providedIn: 'root'
})
export class AuthorHomeFacade {
    private _loading$ = new BehaviorSubject<boolean>(true);
    private currentExecutor = createNullBehaviorSubject<ProfileInterface>();
    private currentTask = createNullBehaviorSubject<TaskInterface>();

    loading$ = this._loading$.asObservable();
    executor$ = this.currentExecutor.asObservable();
    swipingTask$ = this.currentTask.asObservable();
    authorTasks$ = new Subject<TaskInterface[]>;

    constructor(
        private swipeApi: SwipeApi,
        private swipeState: SwipeState,
        private tasksState: AuthorTasksState,
    ) {
    }

    init() {
        this.swipeState.swipe.subscribe(type => this.swipeApi.swipeExecutor(
            type,
            this.currentExecutor.value!,
            this.currentTask.value!
        ));
        this.tasksState.tasks$().pipe(
            tap(tasks => {
                this.authorTasks$.next(tasks);
                if (tasks.length > 0) {
                    this.switchTask(tasks[0])
                }
            })
        ).subscribe();
    }

    switchTask(task: TaskInterface) {
        this.currentTask.next(task);
        this._loading$.next(true);
        this.swipeApi.nextExecutor(task).subscribe((executor) => {
            this.currentExecutor.next(executor?.profile ?? null);
            this._loading$.next(false);
        });
    }
}
