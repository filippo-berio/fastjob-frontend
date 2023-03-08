import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { TaskInterface } from '../../../../../../core/task/data/task.interface';

@Component({
    selector: 'fj-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
    @ContentChild(TemplateRef) templateRef: TemplateRef<any>;

    @Input() tasks: TaskInterface[];

    constructor() {
    }

    ngOnInit() {
    }

}
