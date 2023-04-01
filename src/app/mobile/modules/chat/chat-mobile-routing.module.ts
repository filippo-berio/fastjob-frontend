import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatMobileModule } from './chat-mobile.module';
import { ChatListPageComponent } from './components/chat-list-page/chat-list-page.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ChatListPageComponent,
            },
        ]),
        ChatMobileModule,
    ]
})
export class ChatMobileRoutingModule {

}
