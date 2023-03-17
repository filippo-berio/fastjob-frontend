import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, interval, Subject } from 'rxjs';
import { CredentialsStore } from 'src/app/core/auth/core/store/credentials.store';
import { AuthApi } from '../core/api/auth.api';
import { AuthStore, UserConfirmationStepType } from '../core/store/auth.store';

@Injectable({
    providedIn: 'root'
})
export class ConfirmationFacade {
    private readonly smsTimeoutSeconds = 60;

    private confirmationStep$ = new Subject<UserConfirmationStepType>();

    retries$ = this.store.confirmationRetries$.asObservable();
    step$ = this.confirmationStep$.asObservable();
    loading$ = this.store.loading$.asObservable();

    smsTimeoutSeconds$ = new BehaviorSubject<number>(this.smsTimeoutSeconds);

    constructor(
        private api: AuthApi,
        private store: AuthStore,
        private credentialsStore: CredentialsStore,
        private router: Router,
    ) {
    }

    init() {
        this.confirmationStep$.next('phone');
    }

    setPhone(phone: string) {
        this.store.phone = phone;
    }

    sendConfirmationCode() {
        this.confirmationStep$.next('code');
        this.api.sendConfirmationCode(this.store.phone).pipe(
            catchError(err => {
                this.confirmationStep$.next('phone');
                return err;
            })
        ).subscribe(() => {
            this.startSmsTimeout();
        });
    }

    confirmCode(code: string) {
        this.store.loading$.next(true);
        this.api.confirmCode(this.store.phone, code).pipe(
        ).subscribe((result) => {
            this.store.loading$.next(false);
            if (!result.success) {
                this.store.confirmationRetries$.next(result.retries as number);
                return;
            }

            this.credentialsStore.setCredentials(result.tokens!.accessToken, result.tokens!.refreshToken);
            this.router.navigateByUrl('/home', {
                replaceUrl: true
            });
        });
    }

    private startSmsTimeout() {
        let left = this.smsTimeoutSeconds;
        const interval$ = interval(1000);
        const subscription = interval$.subscribe(() => {
            left -= 1;
            this.smsTimeoutSeconds$.next(left);
        });
        interval$.subscribe(() => {
            if (left < 1) {
                subscription.unsubscribe();
            }
        });
    }
}
