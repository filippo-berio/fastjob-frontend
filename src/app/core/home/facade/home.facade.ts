import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileInterface } from '../../profile/core/data/profile.interface';
import { ProfileStore } from '../../profile/core/store/profile.store';
import { Swipeable } from '../data/swipeable.interface';
import { SwipeType } from '../data/swipe.type';
import { SwiperFactory } from '../service/swiper/swiper.factory';

@Injectable({
    providedIn: 'root'
})
export class HomeFacade {
    currentCard$ = new Observable<Swipeable>();

    constructor(
        private profileStore: ProfileStore,
        private swiperFactory: SwiperFactory,
    ) {
    }

    profile$(): Observable<ProfileInterface> {
        return this.profileStore.profile$.asObservable() as Observable<ProfileInterface>;
    }

    swipe(type: SwipeType) {
        this.swiperFactory.getSwiper().swipe(type)
    }
}
