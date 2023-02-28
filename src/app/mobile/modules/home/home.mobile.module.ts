import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TuiButtonModule } from '@taiga-ui/core';
import { AuthInterceptor } from '../../../core/auth/core/interceptors/auth.interceptor';
import { AuthModule } from '../../../core/auth/auth.module';
import { HomeModule } from '../../../core/home/home.module';
import { MenuMobileModule } from '../menu/menu-mobile.module';
import { ProfileMobileModule } from '../profile/profile-mobile.module';
import { HomeComponent } from './components/home/home.component';
import { ToProfileSettingsComponent } from './components/to-profile-settings/to-profile-settings.component';
import { SwipeCardComponent } from './components/swipe-card/swipe-card.component';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { CategoryMobileModule } from '../category/category-mobile.module';
import { NoSwipeCardsComponent } from './components/no-swipe-cards/no-swipe-cards.component';
import { CardLayoutComponent } from './components/card-layout/card-layout.component';
import { ExecutorCardComponent } from './components/executor-card/executor-card.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { SharedModule } from '../../../core/shared/shared.module';


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
        SwipeCardComponent,
        NoSwipeCardsComponent,
        CardLayoutComponent,
        ExecutorCardComponent,
        TaskCardComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AuthModule,
        MenuMobileModule,
        IonicModule,
        ProfileMobileModule,
        TuiButtonModule,
        HomeModule,
        TuiCurrencyPipeModule,
        CategoryMobileModule,
        SharedModule,
    ],
    providers: [
    ],
})
export class HomeMobileModule {
}
