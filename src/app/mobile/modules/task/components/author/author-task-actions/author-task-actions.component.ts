import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskInterface } from '../../../../../../core/task/data/task.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthorFacade } from '../../../../../../core/task/facade/author.facade';
import { AuthorHomeStorage } from 'src/app/core/home/service/author-home.storage';

@Component({
    selector: 'fj-author-task-actions',
    templateUrl: './author-task-actions.component.html',
    styleUrls: ['./author-task-actions.component.scss'],
})
export class AuthorTaskActionsComponent implements OnInit {
    @Input() task: TaskInterface;
    canFinishTask$: Observable<boolean>;
    showMatches = false;

    constructor(
        private facade: AuthorFacade,
        private modalController: ModalController,
        private router: Router,
        private authorHomeStorage: AuthorHomeStorage,
    ) {
    }

    ngOnInit() {
        this.canFinishTask$ = this.facade.canFinishTask$(this.task);
    }

    openMatches() {
        this.showMatches = true;
    }

    searchExecutors() {
        this.modalController.dismiss();
        this.authorHomeStorage.taskId = this.task.id;
        this.router.navigateByUrl('/home');
    }
}
