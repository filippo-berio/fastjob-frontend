import { Directive, Input, OnInit } from '@angular/core';
import { MessageInterface } from '../../../../../core/chat/services/data/chat.data';
import { profilePhotoPlaceholder } from '../../../../../core/profile/core/data/profile-photo-placeholder';

@Directive()
export abstract class MessageBaseComponent implements OnInit {
    @Input() message: MessageInterface;

    photoPath: string;

    ngOnInit() {
        this.photoPath = this.message.author.photoPath ?? profilePhotoPlaceholder;
    }
}
