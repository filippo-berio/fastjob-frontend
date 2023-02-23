import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from '../../../environments/environment';
import { AppMobileModule } from './app.mobile.module';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppMobileModule)
    .catch(err => console.log(err));
