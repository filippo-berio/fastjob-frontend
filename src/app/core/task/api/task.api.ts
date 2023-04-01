import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskInterface } from '../data/task.interface';
import { ExecutorTaskList } from '../data/executor-task-list.interface';
import { SuccessResponseInterface } from '../../shared/data/success-response.interface';
import { ProfileInterface } from '../../profile/core/data/profile.interface';

@Injectable({
    providedIn: 'root'
})
export class TaskApi {
    private backend = environment.backendUrl;

    constructor(
        private http: HttpClient,
    ) {
    }

    getAuthorTasks(): Observable<TaskInterface[]> {
        return this.http.get<TaskInterface[]>(this.backend + '/api/author/tasks');
    }

    getExecutorTasks(): Observable<ExecutorTaskList> {
        return this.http.get<ExecutorTaskList>(this.backend + '/api/executor/tasks');
    }

    makeOffer(taskId: number, executor: ProfileInterface): Observable<SuccessResponseInterface> {
        return this.http.post<SuccessResponseInterface>(this.backend + '/api/task/offer', {
            taskId,
            executorId: executor.id
        });
    }

    acceptOffer(taskId: number): Observable<ExecutorTaskList> {
        return this.http.post<ExecutorTaskList>(this.backend + '/api/executor/accept-offer', {
            taskId
        });
    }

    finishTask(taskId: number, rating: number, comment?: string): Observable<TaskInterface[]> {
        return this.http.post<TaskInterface[]>(this.backend + '/api/author/finish-task', {
            taskId,
            rating,
            comment
        });
    }

    leaveTaskAuthorReview(taskId: number, rating: number, comment?: string): Observable<SuccessResponseInterface> {
        return this.http.post<SuccessResponseInterface>(this.backend + '/api/executor/review', {
            taskId,
            rating,
            comment
        });
    }
}
