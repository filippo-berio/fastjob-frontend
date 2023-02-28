import { Swipeable } from '../../data/swipeable.interface';
import { SwiperInterface } from './swiper.interface';
import { map, Observable } from 'rxjs';
import { SwipeApi } from '../swipe.api';
import { SwipeType } from '../../data/swipe.type';
import { Injectable } from '@angular/core';
import { NextExecutorInterface } from '../../data/next-executor.interface';

@Injectable({
    providedIn: 'root'
})
export class ExecutorSwiper implements SwiperInterface {
    constructor(
        private swipeApi: SwipeApi
    ) {
    }

    swipe(type: SwipeType, item: Swipeable): Observable<Swipeable | null> {
        return this.swipeApi.swipeExecutor(type, item.task.author, item?.task).pipe(
            map(e => this.mapToSwipeable(e))
        );
    }

    next(): Observable<Swipeable| null> {
        return this.swipeApi.nextExecutor().pipe(
            map(e => this.mapToSwipeable(e))
        );
    }

    private mapToSwipeable(data: NextExecutorInterface | null): Swipeable | null {
        return data ? {
            task: data!.task,
            profile: data!.profile,
        } : null;
    }
}
