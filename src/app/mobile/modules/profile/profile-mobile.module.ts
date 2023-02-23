import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputDateModule, TuiInputModule } from '@taiga-ui/kit';
import { NoProfileGuard } from '../../../core/profile/core/guards/no-profile.guard';
import { ProfileGuard } from '../../../core/profile/core/guards/profile.guard';
import { MenuMobileModule } from '../menu/menu-mobile.module';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterProfileComponent } from './components/register-profile/register-profile.component';


const routes: Route[] = [
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
    declarations: [
        RegisterProfileComponent,
        ProfileComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        TuiInputModule,
        TuiInputDateModule,
        TuiButtonModule,
        MenuMobileModule,
    ]
})
export class ProfileMobileModule {
}
