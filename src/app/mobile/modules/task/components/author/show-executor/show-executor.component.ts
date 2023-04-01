import { Component, Input, OnInit } from '@angular/core';
import { CompanionInterface } from '../../../../../../core/chat/services/data/chat.data';
import { ProfileInterface } from '../../../../../../core/profile/core/data/profile.interface';
import { convertToCompanion } from '../../../../../../core/profile/core/util/convert-companion';
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
    showOfferButton = true;
    companion: CompanionInterface;

    constructor(
        private facade: AuthorFacade,
    ) {
    }

    ngOnInit() {
        if (this.task.executor) {
            this.disableOfferButton('У задачи уже назначен исполнитель');
            if (this.task.executor.id === this.executor.id) {
                this.showOfferButton = false;
            }
        }
        if (this.facade.isTaskOffered(this.task, this.executor)) {
            this.disableOfferButton('Оффер отправлен')
        }
        this.companion = convertToCompanion(this.executor);
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
