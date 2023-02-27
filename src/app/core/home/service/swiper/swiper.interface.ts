import { Swipeable } from "../../data/swipeable.interface";
import { Observable } from 'rxjs';
import { SwipeType } from '../../data/swipe.type';

export interface SwiperInterface {
    swipe(type: SwipeType, item: Swipeable): Observable<Swipeable | null>;
    next(): Observable<Swipeable | null>;
}
