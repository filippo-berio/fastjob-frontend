import { NgModule } from '@angular/core';
import { HomeMobileModule } from './home.mobile.module';
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from '../../../core/home/home.module';
import { RouterModule } from '@angular/router';


const routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: HomeModule.homeRouteGuards
    },
];

@NgModule({
    declarations: [],
    imports: [
        HomeMobileModule,
        RouterModule.forChild(routes),
    ]
})
export class HomeRoutingMobileModule {
}
