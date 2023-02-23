import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ProfileService } from '../service/profile.service';

@Injectable({
    providedIn: 'root'
})
export class NoProfileGuard implements CanActivate {
    constructor(
        private router: Router,
        private profileService: ProfileService,
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.profileService.get().pipe(
            map(profile => {
                if (profile) {
                    this.router.navigateByUrl('/home');
                    return false;
                }
                return true;
            })
        );
    }

}
