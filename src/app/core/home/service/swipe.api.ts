import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ProfileInterface } from '../../profile/core/data/profile.interface';
import { SwipeType } from '../data/swipe.type';
import { TaskInterface } from '../../task/data/task.interface';
import { map, Observable } from 'rxjs';
import { NextExecutorInterface } from '../data/next-executor.interface';

export interface NextSwipeableResponse<T> {
    next: T;
    success: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class SwipeApi {
    private backend = environment.backendUrl;

    constructor(
        private http: HttpClient,
    ) {
    }

    nextTask(): Observable<TaskInterface | null> {
        return this.http.get<TaskInterface>(this.backend + '/api/task/next');
    }

    nextExecutor(task: TaskInterface): Observable<ProfileInterface[]> {
        return this.http.get<{ profile: ProfileInterface }[]>(this.backend + '/api/author/executors/' + task.id).pipe(
            map(res => res.map(taskSwipe => taskSwipe.profile))
        );
    }

    swipeExecutor(
        type: SwipeType,
        executor: ProfileInterface,
        task: TaskInterface,
    ): Observable<ProfileInterface | null> {
        return this.http.post<NextSwipeableResponse<ProfileInterface>>(this.backend + '/api/author/swipe', {
            taskId: task.id,
            executorId: executor.id,
            type,
        }).pipe(
            map(response => response.next)
        )
    }

    swipeTask(
        type: SwipeType,
        task: TaskInterface,
    ): Observable<TaskInterface | null> {
        return this.http.post<NextSwipeableResponse<TaskInterface>>(this.backend + '/api/swipe/task', {
            taskId: task.id,
            type,
        }).pipe(
            map(response => response.next)
        )
    }
}
