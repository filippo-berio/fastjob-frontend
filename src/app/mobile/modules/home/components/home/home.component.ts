import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
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
export class HomeComponent implements ViewWillEnter {

    loading$: Observable<boolean>;
    rerenderTrigger = 0;
    mode: AppMode;

    constructor(
        private changeDetection: ChangeDetectorRef,
        @Inject(CardComponentToken) private cardComponentFactory: CardComponentFactoryType,
        private subscribeRegistry: SubscribeRegistry,
        private settings: SettingsService,
    ) {
    }

    ionViewWillEnter() {
        this.rerenderTrigger++;
        this.mode = this.settings.currentMode;
    }
}
