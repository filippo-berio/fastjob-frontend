import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SwipeApi {
    private backend = environment.backendUrl;

    constructor(
        private http: HttpClient,
    ) {
    }

    swipeExecutor() {
        console.log('swipeExecutor')
    }

    swipeTask() {
        console.log('swipeTask')
    }
}
