import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CredentialsStore } from 'src/app/core/auth/core/store/credentials.store';

@Injectable({
    providedIn: 'root'
})
export class CredentialsGuard implements CanActivate {
    constructor(
        private credentialsStore: CredentialsStore,
        private router: Router,
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log(this.credentialsStore.hasCredentials())
        if (this.credentialsStore.hasCredentials()) {
            return true;

        }
        this.router.navigateByUrl('/auth');
        return false;
    }

}
