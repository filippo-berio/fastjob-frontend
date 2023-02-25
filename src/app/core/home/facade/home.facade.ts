import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileInterface } from '../../profile/core/data/profile.interface';
import { ProfileStore } from '../../profile/core/store/profile.store';

@Injectable({
    providedIn: 'root'
})
export class HomeFacade {
    constructor(
        private profileStore: ProfileStore,
    ) {
    }

    profile$(): Observable<ProfileInterface> {
        return this.profileStore.profile$.asObservable() as Observable<ProfileInterface>;
    }
}
