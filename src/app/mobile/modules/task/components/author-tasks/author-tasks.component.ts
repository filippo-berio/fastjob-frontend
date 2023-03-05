import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthorFacade } from '../../../../../core/task/service/author.facade';
import { Observable } from 'rxjs';
import { TaskInterface } from '../../../../../core/task/data/task.interface';

@Component({
    selector: 'fj-author-tasks',
    templateUrl: './author-tasks.component.html',
    styleUrls: ['./author-tasks.component.scss'],
})
export class AuthorTasksComponent implements OnInit {

    tasks$: Observable<TaskInterface[]>;
    loading$: Observable<boolean>;

    @Output() openTask = new EventEmitter<TaskInterface>();

    constructor(
        private facade: AuthorFacade,
    ) {
    }

    ngOnInit() {
        this.facade.init();
        this.tasks$ = this.facade.tasks$;
        this.loading$ = this.facade.loading$;
    }

    onTaskClick(task: TaskInterface) {
        this.openTask.emit(task);
    }
}
