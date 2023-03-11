import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TuiDialogModule } from '@taiga-ui/core';
import { SwiperModule } from 'swiper/angular';
import { AuthInterceptor } from '../core/auth/core/interceptors/auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { cardComponentFactory, CardComponentToken } from './modules/home/tokens/card-component.token';
import { SettingsService } from '../core/settings/service/settings.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TuiDialogModule,
        SwiperModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
        {
            provide: CardComponentToken,
            useFactory: cardComponentFactory,
            deps: [SettingsService],
        }
    ],
})
export class AppModule {
}
