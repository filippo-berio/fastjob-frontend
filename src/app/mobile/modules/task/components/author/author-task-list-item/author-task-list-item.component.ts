import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfileInterface } from '../../../../../../core/profile/core/data/profile.interface';
import { fullScreenConfig } from '../../../../../../core/shared/data/mat-dialog.configs';
import { MatchInterface } from '../../../../../../core/task/data/match.interface';
import { TaskInterface } from '../../../../../../core/task/data/task.interface';
import { ShowExecutorComponent } from '../show-executor/show-executor.component';

@Component({
    selector: 'fj-author-task-list-item',
    templateUrl: './author-task-list-item.component.html',
    styleUrls: ['./author-task-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorTaskListItemComponent implements OnInit {
    @Input() task: TaskInterface;

    profileIconClass = 'h-8 w-8';

    constructor(
        private dialog: MatDialog,
    ) {
    }

    ngOnInit() {
    }

    getMatches(task: TaskInterface): MatchInterface[] {
        return task.matches?.filter(m => !task.offers?.find(of => of.profile.id === m.executor.id)) ?? [];
    }

    onExecutorIconClick(event: Event, profile: ProfileInterface) {
        event.stopPropagation();
        const componentRef = this.dialog.open(ShowExecutorComponent, fullScreenConfig);
        componentRef.componentInstance.executor = profile;
        componentRef.componentInstance.task = this.task;
    }
}
