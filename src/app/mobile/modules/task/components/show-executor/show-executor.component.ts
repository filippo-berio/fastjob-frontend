import { Component, Input, OnInit } from '@angular/core';
import { MatchInterface } from '../../../../../core/task/data/match.interface';
import { AuthorFacade } from '../../../../../core/task/facade/author.facade';

@Component({
    selector: 'fj-show-executor',
    templateUrl: './show-executor.component.html',
    styleUrls: ['./show-executor.component.scss'],
})
export class ShowExecutorComponent implements OnInit {
    @Input() match: MatchInterface;

    makeOfferButtonText = 'Назначить исполнителя';
    offerButtonDisabled = false;

    constructor(
        private facade: AuthorFacade,
    ) {
    }

    ngOnInit() {
        if (this.match.task.executor) {
            this.disableOfferButton('У задачи уже назначен исполнитель');
        }
        if (this.facade.isTaskOffered(this.match.task, this.match.executor)) {
            this.disableOfferButton('Оффер отправлен')
        }
    }

    openChat() {
        this.facade.openChat(this.match);
    }

    offerTask() {
        this.facade.makeOffer(this.match);
        this.disableOfferButton('Оффер отправлен');
    }

    private disableOfferButton(reason: string) {
        this.offerButtonDisabled = true;
        this.makeOfferButtonText = reason;
    }
}
