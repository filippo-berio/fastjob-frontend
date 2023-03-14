import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

interface Tab {
    icon: string;
    iconSelected: string;
    route: string;
}

export type MenuTabType = 'settings'
    | 'tasks'
    | 'home'
    | 'chats'
    | 'profile';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    @ViewChild('tabs', {
        static: true,
    }) tabsComponent: IonTabs;

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
        chats: {
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
        const selected = this.tabsComponent.tabBar?.selectedTab;
        const tabIcons = this.tabs[tab];
        return tab === selected ? tabIcons.iconSelected : tabIcons.icon;
    }
}
