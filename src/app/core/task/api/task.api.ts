import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskInterface } from '../data/task.interface';
import { ExecutorTaskList } from '../data/executor-task-list.interface';

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
}
