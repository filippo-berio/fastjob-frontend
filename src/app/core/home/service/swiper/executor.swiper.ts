import { Swipeable } from '../../data/swipeable.interface';
import { SwiperInterface } from './swiper.interface';
import { Observable, of } from 'rxjs';
import { SwipeApi } from '../swipe.api';
import { SwipeType } from '../../data/swipe.type';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ExecutorSwiper implements SwiperInterface {
    constructor(
        private swipeApi: SwipeApi
    ) {
    }

    swipe(type: SwipeType, item: Swipeable): Observable<Swipeable | null> {
        this.swipeApi.swipeExecutor(type, item.task.author, item?.task);
        return of(null);
    }

    next(): Observable<Swipeable| null> {
        return this.swipeApi.nextExecutor();
    }
}
