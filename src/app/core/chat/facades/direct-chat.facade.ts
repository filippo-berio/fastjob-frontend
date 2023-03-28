import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';
import { createNullBehaviorSubject } from '../../shared/util/behavior-subject.utils';
import { ChatApi } from '../services/api/chat.api';
import { CompanionInterface, DirectChatInterface } from '../services/data/chat.data';

@Injectable({
    providedIn: 'root',
})
export class DirectChatFacade {
    chat$ = createNullBehaviorSubject<DirectChatInterface>();
    loading$ = new BehaviorSubject<boolean>(true);
    newMessage$ = new Subject<DirectChatInterface>();

    constructor(
        private api: ChatApi,
    ) {
    }

    init(companion: CompanionInterface) {
        this.api.getChat(companion.id).pipe(
            tap(chat => this.chat$.next(chat)),
        ).subscribe(() => {
            this.loading$.next(false)
        });
    }

    sendMessage(message: string) {
        const chat = this.chat$.value!;
        chat.messages.push({
            author: chat.person,
            content: message,
            createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
        });
        this.chat$.next(chat);
        this.newMessage$.next(chat);
    }
}
