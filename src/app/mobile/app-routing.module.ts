import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
        data: {routeName: 'home'}
    },
    // {
    //     path: 'settings',
    //     loadChildren: () => import('../core/settings/settings.module').then(m => m.SettingsModule),
    //     data: {routeName: 'settings'}
    // },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
