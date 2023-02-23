import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProfileInterface } from '../data/profile.interface';

@Injectable({
    providedIn: 'root'
})
export class ProfileStore {
    profile$ = new BehaviorSubject<ProfileInterface|null>(null);
}
