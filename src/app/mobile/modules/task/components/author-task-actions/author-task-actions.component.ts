import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TaskInterface } from '../../../../../core/task/data/task.interface';
import { MatDialog } from '@angular/material/dialog';
import { TaskMatchesComponent } from '../task-matches/task-matches.component';
import { fullScreenConfig } from '../../../../../core/shared/data/mat-dialog.configs';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthorFacade } from '../../../../../core/task/facade/author.facade';

@Component({
    selector: 'fj-author-task-actions',
    templateUrl: './author-task-actions.component.html',
    styleUrls: ['./author-task-actions.component.scss'],
})
export class AuthorTaskActionsComponent implements OnInit {
    @Input() task: TaskInterface;
    canFinishTask$: Observable<boolean>;

    constructor(
        private facade: AuthorFacade,
        private dialog: MatDialog,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.canFinishTask$ = this.facade.canFinishTask$(this.task);
    }

    openMatches() {
        const componentRef = this.dialog.open(TaskMatchesComponent, {
            ...fullScreenConfig
        });
        componentRef.componentInstance.task = this.task;
    }

    searchExecutors() {
        this.dialog.closeAll();
        this.router.navigateByUrl('/home');
    }

    finishTask() {

    }
}
