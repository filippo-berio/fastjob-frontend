import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredentialsGuard } from '../core/auth/core/guards/credentials.guard';
import { ProfileGuard } from '../core/profile/core/guards/profile.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'profile',
        loadChildren: () => import('./modules/profile/profile-mobile-routing.module').then(m => m.ProfileMobileRoutingModule),
        data: {routeName: 'profile'}
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.mobile.module').then(m => m.AuthMobileModule),
        data: {routeName: 'auth'}
    },
    {
        path: 'home',
        loadChildren: () => import('./modules/home/home-routing-mobile.module').then(m => m.HomeRoutingMobileModule),
        data: {routeName: 'home'},
    },
    {
        path: 'settings',
        loadChildren: () => import('./modules/settings/settings-mobile.module').then(m => m.SettingsMobileModule),
        data: {routeName: 'settings'},
        canActivate: [
            CredentialsGuard,
            ProfileGuard,
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
