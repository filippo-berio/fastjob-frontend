import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoProfileGuard } from '../../../core/profile/core/guards/no-profile.guard';
import { ProfileGuard } from '../../../core/profile/core/guards/profile.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterProfileComponent } from './components/register-profile/register-profile.component';
import { ProfileMobileModule } from './profile-mobile.module';

const routes: Routes = [
    {
        path: 'register',
        component: RegisterProfileComponent,
        canActivate: [NoProfileGuard]
    },
    {
        path: '',
        component: ProfileComponent,
        canActivate: [ProfileGuard],
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        ProfileMobileModule,
    ]
})
export class ProfileMobileRoutingModule {

}
