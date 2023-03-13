import { Component, Input, OnInit } from '@angular/core';
import { ProfileInterface } from '../../../../../../core/profile/core/data/profile.interface';
import { TaskInterface } from '../../../../../../core/task/data/task.interface';
import { AuthorFacade } from '../../../../../../core/task/facade/author.facade';

@Component({
    selector: 'fj-show-executor',
    templateUrl: './show-executor.component.html',
    styleUrls: ['./show-executor.component.scss'],
})
export class ShowExecutorComponent implements OnInit {
    @Input() executor: ProfileInterface;
    @Input() task: TaskInterface;

    makeOfferButtonText = 'Назначить исполнителя';
    offerButtonDisabled = false;

    constructor(
        private facade: AuthorFacade,
    ) {
    }

    ngOnInit() {
        if (this.task.executor) {
            this.disableOfferButton('У задачи уже назначен исполнитель');
        }
        if (this.facade.isTaskOffered(this.task, this.executor)) {
            this.disableOfferButton('Оффер отправлен')
        }
    }

    openChat() {
        this.facade.openChat(this.executor, this.task);
    }

    offerTask() {
        this.facade.makeOffer(this.executor, this.task);
        this.disableOfferButton('Оффер отправлен');
    }

    private disableOfferButton(reason: string) {
        this.offerButtonDisabled = true;
        this.makeOfferButtonText = reason;
    }
}
