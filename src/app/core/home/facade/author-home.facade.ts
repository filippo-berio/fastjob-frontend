import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, Subject, switchMap, tap } from 'rxjs';
import { SwipeState } from '../../../mobile/modules/home/services/swipe.state';
import { ProfileInterface } from '../../profile/core/data/profile.interface';
import { createNullBehaviorSubject } from '../../shared/util/nullable-behavior-subject';
import { TaskInterface } from '../../task/data/task.interface';
import { AuthorTasksState } from '../../task/services/author-tasks.state';
import { SwipeType } from '../data/swipe.type';
import { AuthorHomeStorage } from '../service/author-home.storage';
import { SwipeApi } from '../service/swipe.api';

@Injectable({
    providedIn: 'root'
})
export class AuthorHomeFacade {
    private _loading$ = new BehaviorSubject<boolean>(true);
    private _executors$ = new BehaviorSubject<ProfileInterface[]>([]);
    private currentTask = createNullBehaviorSubject<TaskInterface>();

    loading$ = this._loading$.asObservable();
    currentExecutor$ = this._executors$.pipe(
        map(executors => executors[0])
    );
    otherExecutors$ = this._executors$.pipe(
        map(executors => executors.slice(1))
    );
    swipingTask$ = this.currentTask.asObservable();
    authorTasks$ = new Subject<TaskInterface[]>;

    constructor(
        private swipeApi: SwipeApi,
        private swipeState: SwipeState,
        private tasksState: AuthorTasksState,
        private authorHomeStorage: AuthorHomeStorage,
    ) {
    }

    init() {
        this.swipeState.swipe.pipe(
            switchMap(type => this.handleSwipe(type))
        ).subscribe();
        this.tasksState.tasks$().pipe(
            tap(tasks => {
                this.authorTasks$.next(tasks);
                if (tasks.length > 0) {
                    const taskId = this.authorHomeStorage.taskId;
                    let task = tasks[0];
                    if (taskId) {
                        task = tasks.find(t => t.id === taskId) ?? task;
                    }
                    this.switchTask(task)
                }
            })
        ).subscribe();
    }

    switchTask(task: TaskInterface) {
        console.log('switch to ', task.title)
        this.currentTask.next(task);
        this._loading$.next(true);
        this.swipeApi.nextExecutors(task).subscribe((executors) => {
            this._executors$.next(executors);
            this._loading$.next(false);
        });
    }

    private handleSwipe(type: SwipeType): Observable<ProfileInterface | null> {
        const executors = this._executors$.value;
        const swiped = executors.shift();
        this._executors$.next(executors);
        // const swipe$ = swiped ? this.swipeApi.swipeExecutor(
        //     type,
        //     swiped,
        //     this.currentTask.value!
        // ) : of(null)
        const swipe$ = of(null)
        return swipe$.pipe(
            // tap(next => this.addNewExecutor(next)),
            tap(next => this.addNewExecutor(swiped!)),
        );
    }

    private addNewExecutor(executor: ProfileInterface | null) {
        if (executor) {
            const executors = this._executors$.value;
            executors.push(executor);
            this._executors$.next(executors);
        }
    }
}
