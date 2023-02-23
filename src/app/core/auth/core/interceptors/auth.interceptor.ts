import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable, of, tap } from 'rxjs';
import { CredentialsStore } from 'src/app/core/auth/core/store/credentials.store';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        protected credentialsStore: CredentialsStore,
        protected router: Router,
    ) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        console.log(this.credentialsStore.hasCredentials() + 'has')
        if (this.credentialsStore.hasCredentials()) {
            request = request.clone({
                headers: request.headers
                    .set('Authorization', 'Bearer ' + this.credentialsStore.accessToken())
                    .set('x-refresh-token', this.credentialsStore.refreshToken()!)
            });
        }

        return next.handle(request).pipe(
            catchError(err => {
                if (err instanceof HttpErrorResponse && (err.status == 401)) {
                    return this.router.navigateByUrl('/auth')
                }
                return of(err);
            }),
            tap(res => {
                if (
                    res instanceof HttpResponse
                    && res.headers.has('x-access-token')
                    && res.headers.has('x-refresh-token')
                ) {
                    this.credentialsStore.setCredentials(
                        res.headers.get('x-access-token')!,
                        res.headers.get('x-refresh-token')!,
                    )
                }
            })
        );
    }
}
