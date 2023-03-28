import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TuiLoaderModule } from '@taiga-ui/core';
import { ChatListItemComponent } from './components/chat-list-item/chat-list-item.component';
import { ChatListPageComponent } from './components/chat-list-page/chat-list-page.component';
import { ChatModalComponent } from './components/chat-modal/chat-modal.component';
import { ChatSendInputComponent } from './components/chat-send-input/chat-send-input.component';
import { ChatComponent } from './components/chat/chat.component';
import { CompanionMessageComponent } from './components/companion-message/companion-message.component';
import { SelfMessageComponent } from './components/self-message/self-message.component';


@NgModule({
    declarations: [
        ChatListPageComponent,
        ChatListItemComponent,
        ChatModalComponent,
        ChatComponent,
        CompanionMessageComponent,
        SelfMessageComponent,
        ChatSendInputComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ChatListPageComponent,
            },
        ]),
        TuiLoaderModule,
        IonicModule,
    ]
})
export class ChatMobileModule {
}
