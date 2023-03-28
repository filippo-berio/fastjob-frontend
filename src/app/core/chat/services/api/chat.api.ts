import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { SuccessResponseInterface } from '../../../shared/data/success-response.interface';
import { ChatListItemInterface, DirectChatInterface } from '../data/chat.data';

@Injectable({
    providedIn: 'root',
})
export class ChatApi {
    private backend = environment.backendUrl;

    constructor(
        private http: HttpClient,
    ) {
    }

    getChats(): Observable<ChatListItemInterface[]> {
        return this.http.get<ChatListItemInterface[]>(this.backend + '/api/chat');
    }

    getChat(companionId: number): Observable<DirectChatInterface> {
        return this.http.get<DirectChatInterface>(this.backend + '/api/chat/' + companionId);
    }

    sendMessage(chatId: number, content: string): Observable<SuccessResponseInterface> {
        return this.http.post<SuccessResponseInterface>(this.backend + '/api/chat/message', {
            chatId,
            content
        })
    }
}
