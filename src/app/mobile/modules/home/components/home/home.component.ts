import { ChangeDetectorRef, Component, Inject, OnInit, Type } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { HomeFacade } from '../../../../../core/home/facade/home.facade';
import { ProfileInterface } from '../../../../../core/profile/core/data/profile.interface';
import { Swipeable } from '../../../../../core/home/data/swipeable.interface';
import { CardComponentFactoryType, CardComponentToken } from '../../tokens/card-component.token';
import { SubscribeRegistry } from '../../../../../core/shared/services/subscribe.registry';
import { SettingsService } from '../../../../../core/settings/service/settings.service';
import { Observable } from 'rxjs';
import { AppMode } from 'src/app/core/settings/data/app-mode.type';

@Component({
    selector: 'fj-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, ViewWillEnter {

    loading$: Observable<boolean>;

    profile: ProfileInterface;
    card: Swipeable | null
    mode: AppMode;

    constructor(
        private facade: HomeFacade,
        private changeDetection: ChangeDetectorRef,
        @Inject(CardComponentToken) private cardComponentFactory: CardComponentFactoryType,
        private subscribeRegistry: SubscribeRegistry,
        private settings: SettingsService,
    ) {
    }

    ngOnInit() {
        this.facade.profile$().subscribe(p => this.profile = p);
        this.facade.currentCard$.subscribe(card => {
            this.card = card;
        });
        this.mode = this.settings.currentMode;
    }

    ionViewWillEnter() {
        this.facade.init();
    }

    isProfileConfigured(): boolean {
        return this.settings.currentMode === 'author' || this.profile.categories.length > 0;
    }

}
