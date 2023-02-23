import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppIonicModule } from './app.ionic.module';
import { environment } from '../../../environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppIonicModule)
    .catch(err => console.log(err));
