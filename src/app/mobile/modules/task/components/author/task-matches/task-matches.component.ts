import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProfileInterface } from '../../../../../../core/profile/core/data/profile.interface';
import { getProfileRepresentation } from '../../../../../../core/profile/core/util/profile-representation';
import { MatDialog } from '@angular/material/dialog';
import { TaskExecutorsBaseComponent } from '../base/task-executors.base.component';
import { AuthorFacade } from '../../../../../../core/task/facade/author.facade';

@Component({
    selector: 'fj-task-matches',
    templateUrl: './task-matches.component.html',
    styleUrls: ['./task-matches.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskMatchesComponent extends TaskExecutorsBaseComponent implements OnInit {

    profiles: ProfileInterface[];

    openedProfile: ProfileInterface | null = null;

    constructor(
        private dialog: MatDialog,
        private facade: AuthorFacade,
    ) {
        super();
    }

    override ngOnInit() {
        super.ngOnInit();
        this.profiles = [
            ...this.taskOffers.map(of => of.profile),
            ...this.taskMatches.map(m => m.executor),
        ];
    }

    profileRepresentation(profile: ProfileInterface) {
        return getProfileRepresentation(profile);
    }

    openProfile(profile: ProfileInterface) {
        this.openedProfile = profile;
        // const componentRef = this.dialog.open(ShowExecutorComponent, {
        //     ...fullScreenConfig,
        // })
        // componentRef.componentInstance.task = this.task;
        // componentRef.componentInstance.executor = this.profiles[index];
    }

    openChat(event: Event, profile: ProfileInterface) {
        event.stopPropagation();
        this.facade.openChat(profile, this.task);
    }
}
