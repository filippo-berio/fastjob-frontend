import { Component, Input, OnInit } from '@angular/core';
import { DirectChatFacade } from '../../../../../core/chat/facades/direct-chat.facade';
import {
    DirectChatInterface,
    MessageInterface
} from '../../../../../core/chat/services/data/chat.data';
import { profilePhotoPlaceholder } from '../../../../../core/profile/core/data/profile-photo-placeholder';

@Component({
    selector: 'fj-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

    @Input() chat: DirectChatInterface;

    photoPath: string;

    constructor(
        private facade: DirectChatFacade,
    ) {
    }

    ngOnInit() {
        this.photoPath = this.chat.companion.photoPath ?? profilePhotoPlaceholder;
    }

    isMessageSelf(message: MessageInterface): boolean {
        return message.author.id === this.chat.person.id;
    }

    sendMessage(message: string) {
        this.facade.sendMessage(message);
    }
}
