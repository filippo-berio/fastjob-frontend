import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { AuthModule } from '../../../core/auth/auth.module';
import { HomeModule } from '../../../core/home/home.module';
import { TaskModule } from '../../../core/task/task.module';
import { ProfileMobileModule } from '../profile/profile-mobile.module';
import { AuthorHomeComponent } from './components/author/author-home/author-home.component';
import { ExecutorHomeComponent } from './components/executor/executor-home/executor-home.component';
import { HomeComponent } from './components/home/home.component';
import { ToProfileSettingsComponent } from './components/executor/to-profile-settings/to-profile-settings.component';
import { SwipeCardComponent } from './components/swipe-card/swipe-card.component';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { CategoryMobileModule } from '../category/category-mobile.module';
import { NoSwipeCardsComponent } from './components/no-swipe-cards/no-swipe-cards.component';
import { CardLayoutComponent } from './components/card-layout/card-layout.component';
import { ExecutorCardComponent } from './components/author/executor-card/executor-card.component';
import { TaskCardComponent } from './components/executor/task-card/task-card.component';
import { SharedModule } from '../../../core/shared/shared.module';
import { UiModule } from 'src/app/lib/ui/ui.module';

@NgModule({
    declarations: [
        HomeComponent,
        ToProfileSettingsComponent,
        SwipeCardComponent,
        NoSwipeCardsComponent,
        CardLayoutComponent,
        ExecutorCardComponent,
        TaskCardComponent,
        AuthorHomeComponent,
        ExecutorHomeComponent,
    ],
    imports: [
        CommonModule,
        AuthModule,
        IonicModule,
        ProfileMobileModule,
        TuiButtonModule,
        HomeModule,
        TuiCurrencyPipeModule,
        CategoryMobileModule,
        SharedModule,
        UiModule,
        TuiLoaderModule,
        TaskModule,
    ],
    providers: [
    ],
})
export class HomeMobileModule {
}
