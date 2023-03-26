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
                    let task = undefined;
                    if (taskId) {
                        task = tasks.find(t => t.id === taskId)!;
                        this.switchTask(task)
                    } else {
                        this.getNextExecutors().subscribe(executors => {
                            if (executors.length) {
                                this.setTask(executors[0].task);
                            }
                        });
                    }
                }
            })
        ).subscribe();
    }

    switchTask(task: TaskInterface) {
        this.setTask(task);
        this._loading$.next(true);
        this.getNextExecutors(task).subscribe(() => {
            this._loading$.next(false);
        });
    }

    private setTask(task: TaskInterface) {
        this.currentTask.next(task);
        this.authorHomeStorage.taskId = task.id;
    }

    private getNextExecutors(task?: TaskInterface) {
        return this.swipeApi.nextExecutors(task).pipe(
            tap(executors => this._executors$.next(executors.map(e => e.profile)))
        );
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
