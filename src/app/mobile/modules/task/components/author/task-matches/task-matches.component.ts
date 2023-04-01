import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CompanionInterface } from '../../../../../../core/chat/services/data/chat.data';
import { ProfileInterface } from '../../../../../../core/profile/core/data/profile.interface';
import { convertToCompanion } from '../../../../../../core/profile/core/util/convert-companion';
import { TaskExecutorsBaseComponent } from '../base/task-executors.base.component';

@Component({
    selector: 'fj-task-matches',
    templateUrl: './task-matches.component.html',
    styleUrls: ['./task-matches.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskMatchesComponent extends TaskExecutorsBaseComponent implements OnInit {

    profiles: ProfileInterface[];

    override ngOnInit() {
        super.ngOnInit();
        this.profiles = [
            ...this.taskOffers.map(of => of.profile),
            ...this.taskMatches.map(m => m.executor),
        ];
    }

    getCompanion(profile: ProfileInterface): CompanionInterface {
        return convertToCompanion(profile);
    }
}
