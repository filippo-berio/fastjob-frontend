import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AuthInterceptor } from '../../../core/auth/core/interceptors/auth.interceptor';
import { AuthModule } from '../../../core/auth/auth.module';
import { HomeModule } from '../../../core/home/home.module';
import { MenuMobileModule } from '../menu/menu-mobile.module';
import { ProfileMobileModule } from '../profile/profile-mobile.module';
import { HomeComponent } from './components/home/home.component';
import { ToProfileSettingsComponent } from './components/to-profile-settings/to-profile-settings.component';


const routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: HomeModule.homeRouteGuards
    },
];

@NgModule({
    declarations: [
        HomeComponent,
        ToProfileSettingsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AuthModule,
        MenuMobileModule,
        IonicModule,
        ProfileMobileModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        }
    ],
})
export class HomeMobileModule {
}
