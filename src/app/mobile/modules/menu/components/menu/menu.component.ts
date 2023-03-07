import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SubscribeRegistry } from '../../../../../core/shared/services/subscribe.registry';

export type MenuTabType = 'settings'
    | 'tasks'
    | 'home'
    | 'chat'
    | 'profile';

interface Tab {
    icon: string;
    iconSelected: string;
    route: string;
}

@Component({
    selector: 'fj-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
    @Input() selected: MenuTabType;

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

    constructor(
        private router: Router,
        private subscribeRegistry: SubscribeRegistry,
    ) {
    }

    getIcon(tab: MenuTabType) {
        return this.selected === tab ?
            this.tabs[tab].iconSelected :
            this.tabs[tab].icon;
    }

    navigate(tab: MenuTabType) {
        this.subscribeRegistry.unsubscribe();
        this.router.navigateByUrl(this.tabs[tab].route)
    }
}
