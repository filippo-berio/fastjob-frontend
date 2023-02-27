import { Swipeable } from '../../data/swipeable.interface';
import { SwiperInterface } from './swiper.interface';
import { Observable, of } from 'rxjs';
import { SwipeApi } from '../swipe.api';
import { SwipeType } from '../../data/swipe.type';

export class TaskSwiper implements SwiperInterface {
    constructor(
        private swipeApi: SwipeApi
    ) {
    }

    swipe(type: SwipeType, item?: Swipeable): Observable<Swipeable | null> {
        this.swipeApi.swipeTask(type, item?.task);
        return of(null);
    }

}
