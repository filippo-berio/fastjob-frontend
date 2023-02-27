import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterOutlet } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppModule } from '../app.module';
import { TuiRootModule } from '@taiga-ui/core';

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppModule,
        TuiRootModule,
        IonicModule.forRoot({
            rippleEffect: false,
            animated: false,
        }),
        RouterOutlet,
    ],
    providers: [
        {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy
        },
    ],
    bootstrap: [AppComponent],
})
export class AppIonicModule {
}
