import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TaskInterface } from '../../../../../../core/task/data/task.interface';

@Component({
    selector: 'fj-task-photos-slider',
    templateUrl: './task-photos-slider.component.html',
    styleUrls: ['./task-photos-slider.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskPhotosSliderComponent implements OnInit {
    @Input() task: TaskInterface;
    index = 0;

    constructor() {
    }

    ngOnInit() {
    }

}
