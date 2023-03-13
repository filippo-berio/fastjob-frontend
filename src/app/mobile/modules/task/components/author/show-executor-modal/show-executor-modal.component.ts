import { Component, Input, OnInit } from '@angular/core';
import { ProfileInterface } from '../../../../../../core/profile/core/data/profile.interface';
import { TaskInterface } from '../../../../../../core/task/data/task.interface';

@Component({
    selector: 'fj-show-executor-modal',
    templateUrl: './show-executor-modal.component.html',
    styleUrls: ['./show-executor-modal.component.scss'],
})
export class ShowExecutorModalComponent implements OnInit {
    @Input() task: TaskInterface;

    openedProfile: ProfileInterface | null = null;

    constructor() {
    }

    ngOnInit() {
    }

    open(executor: ProfileInterface) {
        this.openedProfile = executor;
    }
}
