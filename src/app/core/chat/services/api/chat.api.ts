import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { ChatListItemInterface } from '../data/chat.data';

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
}
