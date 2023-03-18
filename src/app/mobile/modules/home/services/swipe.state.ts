import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SwipeType } from '../../../../core/home/data/swipe.type';

@Injectable({
    providedIn: 'root'
})
export class SwipeState {
    swipe = new Subject<SwipeType>();
}
