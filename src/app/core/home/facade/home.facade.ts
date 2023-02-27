import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { ProfileInterface } from '../../profile/core/data/profile.interface';
import { ProfileStore } from '../../profile/core/store/profile.store';
import { Swipeable } from '../data/swipeable.interface';
import { SwipeType } from '../data/swipe.type';
import { SwiperFactory } from '../service/swiper/swiper.factory';

@Injectable({
    providedIn: 'root'
})
export class HomeFacade {
    private currentCardSubject = new BehaviorSubject<Swipeable|null>(null);

    currentCard$ = this.currentCardSubject.asObservable();

    constructor(
        private profileStore: ProfileStore,
        private swiperFactory: SwiperFactory,
    ) {
    }

    init(): Observable<boolean> {
        return this.swiperFactory.getSwiper().next().pipe(
            tap(swipeable => this.currentCardSubject.next(swipeable)),
            map(swipeable => !!swipeable)
        );
    }

    profile$(): Observable<ProfileInterface> {
        return this.profileStore.profile$.asObservable() as Observable<ProfileInterface>;
    }

    swipe(type: SwipeType) {
        this.swiperFactory.getSwiper().swipe(type, this.currentCardSubject.value!).pipe(
            tap(swipeable => this.currentCardSubject.next(swipeable))
        ).subscribe();
    }
}
