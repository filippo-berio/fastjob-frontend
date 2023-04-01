import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CompanionInterface } from '../../../../../../core/chat/services/data/chat.data';
import { profilePhotoPlaceholder } from '../../../../../../core/profile/core/data/profile-photo-placeholder';
import { NewProfileReview } from '../../../../../../core/profile/core/data/profile-review.interface';
import { convertToCompanion } from '../../../../../../core/profile/core/util/convert-companion';
import { getProfileFullName } from '../../../../../../core/profile/core/util/profile-representation';
import { TaskInterface } from '../../../../../../core/task/data/task.interface';
import { ExecutorFacade } from '../../../../../../core/task/facade/executor.facade';
import { Observable } from 'rxjs';

@Component({
    selector: 'fj-executor-task-actions',
    templateUrl: './executor-task-actions.component.html',
    styleUrls: ['./executor-task-actions.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExecutorTaskActionsComponent implements OnInit {

    @Input() task: TaskInterface;

    canAcceptOffer$: Observable<boolean>;
    canGoChat$: Observable<boolean>;
    authorCompanion: CompanionInterface;

    constructor(
        public facade: ExecutorFacade,
    ) {
    }

    ngOnInit() {
        this.canAcceptOffer$ = this.facade.canAcceptOffer$(this.task);
        this.canGoChat$ = this.facade.canGoChat$(this.task);
        this.authorCompanion = convertToCompanion(this.task.author)
    }

    acceptOffer() {
        this.facade.acceptOffer(this.task);
    }

    leaveReview(review: NewProfileReview) {
        this.facade.leaveReview(this.task, review);
    }
}
