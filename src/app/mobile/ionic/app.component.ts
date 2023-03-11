import { Component } from '@angular/core';

interface Tab {
    icon: string;
    iconSelected: string;
    route: string;
}

export type MenuTabType = 'settings'
    | 'tasks'
    | 'home'
    | 'chat'
    | 'profile';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    constructor() {
    }

    private tabs: Record<MenuTabType, Tab> = {
        settings: {
            icon: 'settings-outline',
            iconSelected: 'settings',
            route: 'settings'
        },
        tasks: {
            icon: 'document-text-outline',
            iconSelected: 'document-text',
            route: 'tasks'
        },
        home: {
            icon: 'flash-outline',
            iconSelected: 'flash',
            route: 'home'
        },
        chat: {
            icon: 'chatbubble-ellipses-outline',
            iconSelected: 'chatbubble-ellipses',
            route: 'chats'
        },
        profile: {
            icon: 'person-outline',
            iconSelected: 'person',
            route: 'profile'
        },
    };


    getIcon(tab: MenuTabType) {
        return this.tabs[tab].icon;
    }
}
