import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CredentialsGuard } from '../auth/core/guards/credentials.guard';
import { ProfileGuard } from '../profile/core/guards/profile.guard';
import { ProfileModule } from '../profile/profile.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './presentation/components/home/home.component';


const routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [
            // CredentialsGuard,
            // ProfileGuard,
        ]
    },
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
    ],
    providers: [],
})
export class HomeModule {
}
