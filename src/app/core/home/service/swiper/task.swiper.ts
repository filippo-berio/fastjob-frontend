import { Swipeable } from '../../data/swipeable.interface';
import { SwiperInterface } from './swiper.interface';
import { map, Observable, of } from 'rxjs';
import { SwipeApi } from '../swipe.api';
import { SwipeType } from '../../data/swipe.type';
import { TaskInterface } from '../../../task/data/task.interface';

export class TaskSwiper implements SwiperInterface {
    constructor(
        private swipeApi: SwipeApi
    ) {
    }

    swipe(type: SwipeType, item: Swipeable): Observable<Swipeable | null> {
        return this.swipeApi.swipeTask(type, item.task).pipe(
            map(task => this.mapToSwipeable(task))
        );
    }

    next(): Observable<Swipeable | null> {
        return this.swipeApi.nextTask().pipe(
            map(task => this.mapToSwipeable(task))
        );
    }

    private mapToSwipeable(task: TaskInterface | null): Swipeable | null {
        return task ? {task} : null;
    }
}
