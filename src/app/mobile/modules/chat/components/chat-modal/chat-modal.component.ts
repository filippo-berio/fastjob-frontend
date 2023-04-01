import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { DirectChatFacade } from '../../../../../core/chat/facades/direct-chat.facade';
import { CompanionInterface, DirectChatInterface } from '../../../../../core/chat/services/data/chat.data';

@Component({
    selector: 'fj-chat-modal',
    templateUrl: './chat-modal.component.html',
    styleUrls: ['./chat-modal.component.scss'],
})
export class ChatModalComponent {

    opened = false;
    chat: DirectChatInterface;
    loading$: Observable<boolean>;

    constructor(
        private route: ActivatedRoute,
        private facade: DirectChatFacade,
    ) {
    }

    open(companion: CompanionInterface) {
        this.loading$ = this.facade.loading$;
        this.facade.chat$.subscribe(chat => this.chat = chat!);
        this.facade.init(companion);
        this.opened = true;
    }
}
