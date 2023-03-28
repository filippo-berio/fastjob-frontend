import { Component } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ChatListFacade } from '../../../../../core/chat/facades/chat-list.facade';
import { ChatListItemInterface } from '../../../../../core/chat/services/data/chat.data';

@Component({
    selector: 'fj-chat-list-page',
    templateUrl: './chat-list-page.component.html',
    styleUrls: ['./chat-list-page.component.scss'],
})
export class ChatListPageComponent implements ViewWillEnter {

    public loading$: Observable<boolean>;
    public list$: Observable<ChatListItemInterface[]>;

    constructor(
        private facade: ChatListFacade,
    ) {
    }

    ionViewWillEnter() {
        this.loading$ = this.facade.loading$;
        this.list$ = this.facade.list$;

        this.facade.init();
    }
}
