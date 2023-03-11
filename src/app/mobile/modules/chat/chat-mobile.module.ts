import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChatPageComponent } from './components/chat-page/chat-page.component';


@NgModule({
    declarations: [
        ChatPageComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ChatPageComponent,
            }
        ]),
        // MenuMobileModule
    ]
})
export class ChatMobileModule {
}
