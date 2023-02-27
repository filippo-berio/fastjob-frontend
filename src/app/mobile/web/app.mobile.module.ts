import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TuiRootModule } from '@taiga-ui/core';
import { AppModule } from '../app.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppModule,
        TuiRootModule,
        RouterOutlet,
        IonicModule.forRoot({
            rippleEffect: false,
            animated: false,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppMobileModule {
}
