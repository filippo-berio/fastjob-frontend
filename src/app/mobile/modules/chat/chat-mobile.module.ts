import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TuiLoaderModule } from '@taiga-ui/core';
import { ChatListItemComponent } from './components/chat-list-item/chat-list-item.component';
import { ChatListPageComponent } from './components/chat-list-page/chat-list-page.component';


@NgModule({
    declarations: [
        ChatListPageComponent,
        ChatListItemComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ChatListPageComponent,
            }
        ]),
        TuiLoaderModule,
    ]
})
export class ChatMobileModule {
}
