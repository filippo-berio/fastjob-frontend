import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProfileApi } from '../api/profile.api';
import { ProfileInterface } from '../data/profile.interface';
import { ProfileStore } from '../store/profile.store';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    constructor(
        private api: ProfileApi,
        private store: ProfileStore,
    ) {
    }

    get(): Observable<ProfileInterface|null> {
        return this.store.profile$.value ? this.store.profile$ :
            this.api.getProfile().pipe(
                map(response => {
                    if (!response.success) {
                        return null;
                    }
                    // const profile = new Profile(...response.data!);
                    this.store.profile$.next(response.data!);
                    return response.data!;
                })
            );
    }
}
