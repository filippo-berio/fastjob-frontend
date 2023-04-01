import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CompanionInterface } from '../../../../../../core/chat/services/data/chat.data';
import { profilePhotoPlaceholder } from '../../../../../../core/profile/core/data/profile-photo-placeholder';
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
        private facade: ExecutorFacade,
    ) {
    }

    ngOnInit() {
        this.canAcceptOffer$ = this.facade.canAcceptOffer$(this.task);
        this.canGoChat$ = this.facade.canGoChat$(this.task);
        this.authorCompanion = {
            id: this.task.author.id,
            name: getProfileFullName(this.task.author),
            photoPath: this.task.author.photos.find(ph => ph.main)?.path ?? profilePhotoPlaceholder
        }
    }

    acceptOffer() {
        this.facade.acceptOffer(this.task);
    }
}
