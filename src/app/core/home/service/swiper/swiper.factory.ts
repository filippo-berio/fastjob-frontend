import { Injectable } from '@angular/core';
import { SettingsService } from '../../../settings/service/settings.service';
import { SwipeApi } from '../swipe.api';
import { ExecutorSwiper } from './executor.swiper';
import { SwiperInterface } from './swiper.interface';
import { TaskSwiper } from './task.swiper';

@Injectable({
    providedIn: 'root'
})
export class SwiperFactory {
    constructor(
        private settingsService: SettingsService,
        private swipeApi: SwipeApi
    ) {
    }

    getSwiper(): SwiperInterface {
        const mode = this.settingsService.currentMode;
        return mode === 'author' ? new ExecutorSwiper(this.swipeApi) : new TaskSwiper(this.swipeApi);
    }
}
