import { Component, Input, OnInit } from '@angular/core';
import { TaskInterface } from '../../../../../core/task/data/task.interface';

@Component({
    selector: 'fj-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

    @Input() task: TaskInterface;

    constructor() {
    }

    ngOnInit() {
    }

}
