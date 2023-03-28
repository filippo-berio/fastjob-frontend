import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ChatListItemInterface } from '../../../../../core/chat/services/data/chat.data';
import { profilePhotoPlaceholder } from '../../../../../core/profile/core/data/profile-photo-placeholder';

@Component({
    selector: 'fj-chat-list-item',
    templateUrl: './chat-list-item.component.html',
    styleUrls: ['./chat-list-item.component.scss'],
})
export class ChatListItemComponent implements OnInit {
    @Input() item: ChatListItemInterface;

    photoPath: string;

    constructor() {
    }

    ngOnInit() {
        this.photoPath = this.item.companion.photoPath ?? profilePhotoPlaceholder;
    }

}
