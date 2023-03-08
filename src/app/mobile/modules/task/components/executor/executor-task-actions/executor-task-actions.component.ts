import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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

    constructor(
        private facade: ExecutorFacade,
    ) {
    }

    ngOnInit() {
        this.canAcceptOffer$ = this.facade.canAcceptOffer$(this.task);
        this.canGoChat$ = this.facade.canGoChat$(this.task);
    }

    goChat() {
        this.facade.goChat(this.task);
    }

    acceptOffer() {
        this.facade.acceptOffer(this.task);
    }
}
