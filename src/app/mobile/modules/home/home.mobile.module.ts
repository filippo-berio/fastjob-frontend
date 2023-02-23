import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthInterceptor } from '../../../core/auth/core/interceptors/auth.interceptor';
import { AuthModule } from '../../../core/auth/auth.module';
import { HomeModule } from '../../../core/home/home.module';
import { MenuMobileModule } from '../menu/menu-mobile.module';
import { HomeComponent } from './components/home/home.component';


const routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: HomeModule.homeRouteGuards
    },
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AuthModule,
        MenuMobileModule,
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
