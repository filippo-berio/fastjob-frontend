import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TaskInterface } from '../../../../../core/task/data/task.interface';
import { ProfileInterface } from '../../../../../core/profile/core/data/profile.interface';
import { getProfileRepresentation } from '../../../../../core/profile/core/util/profile-representation';
import { MatchInterface } from '../../../../../core/task/data/match.interface';
import { MatDialog } from '@angular/material/dialog';
import { fullScreenConfig } from '../../../../../core/shared/data/mat-dialog.configs';
import { ShowExecutorComponent } from '../show-executor/show-executor.component';
import { AuthorFacade } from '../../../../../core/task/facade/author.facade';

@Component({
    selector: 'fj-task-matches',
    templateUrl: './task-matches.component.html',
    styleUrls: ['./task-matches.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskMatchesComponent implements OnInit {
    @Input() task: TaskInterface;

    constructor(
        private dialog: MatDialog,
        private facade: AuthorFacade,
    ) {
    }

    ngOnInit() {
    }

    profileRepresentation(profile: ProfileInterface) {
        return getProfileRepresentation(profile);
    }

    openProfile(match: MatchInterface) {
        const componentRef = this.dialog.open(ShowExecutorComponent, {
            ...fullScreenConfig,
        })
        componentRef.componentInstance.match = match;
    }

    openChat(event: Event, match: MatchInterface) {
        event.stopPropagation();
        this.facade.openChat(match);
    }
}
