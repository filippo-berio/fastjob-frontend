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
        loadChildren: () => import('../core/profile/profile.module').then(m => m.ProfileModule),
        data: {routeName: 'profile'}
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.mobile.module').then(m => m.AuthMobileModule),
        data: {routeName: 'auth'}
    },
    {
        path: 'home',
        loadChildren: () => import('../core/home/home.module').then(m => m.HomeModule),
        data: {routeName: 'home'}
    },
    {
        path: 'settings',
        loadChildren: () => import('../core/settings/settings.module').then(m => m.SettingsModule),
        data: {routeName: 'settings'}
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
