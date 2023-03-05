import { Component, Input, OnInit } from '@angular/core';
import { TaskInterface } from '../../../../../core/task/data/task.interface';
import { AuthorFacade } from '../../../../../core/task/facade/author.facade';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'fj-finish-task',
    templateUrl: './finish-task.component.html',
    styleUrls: ['./finish-task.component.scss'],
})
export class FinishTaskComponent implements OnInit {
    @Input() task: TaskInterface;

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
    }

}
