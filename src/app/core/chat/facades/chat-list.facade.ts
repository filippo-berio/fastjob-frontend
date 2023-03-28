import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChatApi } from '../services/api/chat.api';
import { ChatListItemInterface } from '../services/data/chat.data';
import { DirectChatFacade } from './direct-chat.facade';

@Injectable({
    providedIn: 'root',
})
export class ChatListFacade {
    public loading$ = new BehaviorSubject<boolean>(true);
    public list$ = new BehaviorSubject<ChatListItemInterface[]>([]);

    constructor(
        private chatApi: ChatApi,
        private directChatFacade: DirectChatFacade,
    ) {
    }

    init() {
        this.chatApi.getChats()
            .subscribe((list) => {
                this.list$.next(list);
                this.loading$.next(false);
            }
        );

        this.directChatFacade.newMessage$.subscribe(chat => {
            const chats = this.list$.value;
            let changeChatIndex: number;
            chats.forEach((c, i) => {
                if (c.chatId === chat.id) {
                    changeChatIndex = i;
                }
            });
            const changed = chats[changeChatIndex!];
            changed.lastMessage = chat.messages[chat.messages.length - 1];
            chats[changeChatIndex!] = changed;
            this.list$.next(chats);
        })
    }
}
