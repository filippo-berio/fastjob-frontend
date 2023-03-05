import { Injectable } from '@angular/core';
import { TaskApi } from '../api/task.api';
import { BehaviorSubject, finalize, map, Observable, tap } from 'rxjs';
import { TaskInterface } from '../data/task.interface';
import { ProfileInterface } from '../../profile/core/data/profile.interface';
import { MatchInterface } from '../data/match.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class AuthorFacade {
    private _loading$ = new BehaviorSubject<boolean>(true);
    private _tasks$ = new BehaviorSubject<TaskInterface[]>([]);
    private finishTaskForm: FormGroup;

    tasks$ = this._tasks$.asObservable();
    loading$ = this._loading$.asObservable();

    constructor(
        private taskApi: TaskApi,
    ) {
    }

    init() {
         this.taskApi.getAuthorTasks().pipe(
            tap(tasks => this._tasks$.next(tasks)),
            finalize(() => this._loading$.next(false))
        ).subscribe();
    }

    openChat(match: MatchInterface) {
        console.log('NAVIGATE TO CHAT WITH ', match.executor.firstName);
    }

    makeOffer(match: MatchInterface) {
        this.taskApi.makeOffer(match.task, match.executor).subscribe();
    }

    isTaskOffered(task: TaskInterface, executor: ProfileInterface): boolean {
        return !!task.offers?.find(o => o.profile.id === executor.id);
    }

    canFinishTask$(task: TaskInterface): Observable<boolean> {
        return this.tasks$.pipe(
            map(tasks => {
                return tasks.find(t => t.id === task.id)?.status === 'work'
            })
        );
    }

    finishTask(task: TaskInterface) {
        const formValue = this.finishTaskForm.value;
        this.taskApi.finishTask(task, formValue.rating, formValue.comment).pipe(
            tap(tasks => this._tasks$.next(tasks))
        ).subscribe();
    }

    createFinishTaskForm(): FormGroup {
        this.finishTaskForm = new FormGroup({
            rating: new FormControl(null, [Validators.required]),
            comment: new FormControl(null),
        });
        return this.finishTaskForm;
    }
}
