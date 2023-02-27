import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ProfileInterface } from '../../profile/core/data/profile.interface';
import { SwipeType } from '../data/swipe.type';
import { TaskInterface } from '../../task/data/task.interface';

@Injectable({
    providedIn: 'root'
})
export class SwipeApi {
    private backend = environment.backendUrl;

    constructor(
        private http: HttpClient,
    ) {
    }

    swipeExecutor(
        type: SwipeType,
        executor?: ProfileInterface,
        task?: TaskInterface,
    ) {
        console.log('swipeExecutor')
    }

    swipeTask(
        type: SwipeType,
        task?: TaskInterface,
    ) {
        console.log('swipeTask')
    }
}
