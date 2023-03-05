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

    nextExecutor(): Observable<NextExecutorInterface | null> {
        return this.http.get<NextExecutorInterface>(this.backend + '/api/executor/next');
    }

    swipeExecutor(
        type: SwipeType,
        executor: ProfileInterface,
        task: TaskInterface,
    ): Observable<NextExecutorInterface | null> {
        return this.http.post<NextSwipeableResponse<NextExecutorInterface>>(this.backend + '/api/author/swipe', {
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
