import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export type UserConfirmationStepType = 'phone' | 'code';

@Injectable({
    providedIn: 'root'
})
export class AuthStore {
    confirmationRetries$ = new Subject<number>();
    loading$ = new BehaviorSubject<boolean>(false);
    phone: string;
}
