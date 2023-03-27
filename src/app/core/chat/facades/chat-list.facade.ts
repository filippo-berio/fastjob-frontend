import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable, of } from 'rxjs';
import { ChatApi } from '../services/api/chat.api';
import { ChatListItemInterface } from '../services/data/chat.data';

@Injectable({
    providedIn: 'root',
})
export class ChatListFacade {
    public loading$ = new BehaviorSubject<boolean>(true);
    public list$ = new BehaviorSubject<ChatListItemInterface[]>([]);

    constructor(
        private chatApi: ChatApi,
    ) {
    }

    init() {
        this.chatApi.getChats()
            .subscribe((list) => {
                this.list$.next(list);
                this.loading$.next(false);
            }
        );

    }
}
