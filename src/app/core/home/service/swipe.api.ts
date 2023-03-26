import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ProfileInterface } from '../../profile/core/data/profile.interface';
import { NextExecutor } from '../data/next-executor.interface';
import { SwipeType } from '../data/swipe.type';
import { TaskInterface } from '../../task/data/task.interface';
import { map, Observable } from 'rxjs';

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

    nextTasks(): Observable<TaskInterface[]> {
        return this.http.get<TaskInterface[]>(this.backend + '/api/executor/next-tasks');
    }

    nextExecutors(task?: TaskInterface): Observable<NextExecutor[]> {
        let params = new HttpParams();
        if (task) {
            params = params.set('taskId', task.id);
        }
        return this.http.get<NextExecutor[]>(this.backend + '/api/author/executors', {
            params: params
        }).pipe(
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
    ): Observable<TaskInterface[]> {
        return this.http.post<NextSwipeableResponse<TaskInterface[]>>(this.backend + '/api/executor/swipe', {
            taskId: task.id,
            type,
        }).pipe(
            map(response => response.next)
        )
    }
}
