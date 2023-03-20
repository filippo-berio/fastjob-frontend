import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskInterface } from '../../../../../../core/task/data/task.interface';
import { AuthorFacade } from '../../../../../../core/task/facade/author.facade';

@Component({
    selector: 'fj-finish-task',
    templateUrl: './finish-task.component.html',
    styleUrls: ['./finish-task.component.scss'],
})
export class FinishTaskComponent implements OnInit {
    @Input() task: TaskInterface;

    opened = false;
    form: FormGroup

    constructor(
        private authorFacade: AuthorFacade,
    ) {
    }

    ngOnInit() {
        this.form = this.authorFacade.createFinishTaskForm();
    }

    finish() {
        this.authorFacade.finishTask(this.task);
        this.opened = false;
    }

    open(task: TaskInterface) {
        this.task = task;
        this.opened = true;
    }
}
