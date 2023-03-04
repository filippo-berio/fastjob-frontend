import { ChangeDetectorRef, Component, Inject, OnInit, Type } from '@angular/core';
import { HomeFacade } from '../../../../../core/home/facade/home.facade';
import { ProfileInterface } from '../../../../../core/profile/core/data/profile.interface';
import { Swipeable } from '../../../../../core/home/data/swipeable.interface';
import { CardComponentFactoryType, CardComponentToken } from '../../tokens/card-component.token';
import { SubscribeRegistry } from '../../../../../core/shared/services/subscribe.registry';
import { SettingsService } from '../../../../../core/settings/service/settings.service';

@Component({
    selector: 'fj-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    profile: ProfileInterface;
    card: Swipeable | null
    cardComponent: Type<any>;

    constructor(
        private facade: HomeFacade,
        private changeDetection: ChangeDetectorRef,
        @Inject(CardComponentToken) private cardComponentFactory: CardComponentFactoryType,
        private subscribeRegistry: SubscribeRegistry,
        private settings: SettingsService,
    ) {
    }

    ngOnInit() {
        console.log('home');
        const profileSub = this.facade.profile$().subscribe(p => this.profile = p);
        const cardSub = this.facade.currentCard$.subscribe(card => {
            this.card = card;
            this.cardComponent = this.cardComponentFactory();
            this.changeDetection.detectChanges();
        });
        this.facade.init().subscribe(hasNext => {
            if (!hasNext) {
                console.error('NO TASK LEFT')
            }
        });

        this.subscribeRegistry.register(profileSub, cardSub);
    }

    isProfileConfigured(): boolean {
        return this.settings.currentMode === 'author' || this.profile.categories.length > 0;
    }

    accept() {
        this.facade.swipe('accept');
    }

    reject() {
        this.facade.swipe('reject');
    }
}
