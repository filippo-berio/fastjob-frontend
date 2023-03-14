import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TuiDialogModule } from '@taiga-ui/core';
import { AuthInterceptor } from '../core/auth/core/interceptors/auth.interceptor';
import ruLocaleExtra from '@angular/common/locales/extra/ru';
import ruLocale from '@angular/common/locales/ru';

import { AppRoutingModule } from './app-routing.module';
import { cardComponentFactory, CardComponentToken } from './modules/home/tokens/card-component.token';
import { SettingsService } from '../core/settings/service/settings.service';

registerLocaleData(ruLocale, 'ru-RU', ruLocaleExtra);

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TuiDialogModule,
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
        },
        {
            provide: LOCALE_ID,
            useValue: 'ru-RU'
        },
    ],
})
export class AppModule {
}
