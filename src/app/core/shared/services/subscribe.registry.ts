import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

type SubscribeType = Subscription;

@Injectable({
    providedIn: 'root'
})
export class SubscribeRegistry {
    private subscribes: SubscribeType[] = [];

    register(...subscribes: SubscribeType[])  {
        subscribes.forEach(s => this.add(s));
    }

    unsubscribe() {
        this.subscribes.forEach((_, i) => this.remove(i));
    }

    private remove(index: number) {
        this.subscribes[index].unsubscribe();
        delete this.subscribes[index];
    }

    private add(subscribe: SubscribeType) {
        this.subscribes.push(subscribe);
    }
}
