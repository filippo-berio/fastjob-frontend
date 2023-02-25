import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { Route, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputDateModule, TuiInputModule } from '@taiga-ui/kit';
import { NoProfileGuard } from '../../../core/profile/core/guards/no-profile.guard';
import { ProfileGuard } from '../../../core/profile/core/guards/profile.guard';
import { CategoryMobileModule } from '../category/category-mobile.module';
import { LocationMobileModule } from '../location/location-mobile.module';
import { MenuMobileModule } from '../menu/menu-mobile.module';
import { SharedMobileModule } from '../shared/shared-mobile.module';
import { ProfileLayoutComponent } from './components/profile-layout/profile-layout.component';
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
        ProfileComponent,
        ProfileLayoutComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        TuiInputModule,
        TuiInputDateModule,
        TuiButtonModule,
        MenuMobileModule,
        IonicModule,
        SharedMobileModule,
        MatDialogModule,
        CategoryMobileModule,
        LocationMobileModule,
    ]
})
export class ProfileMobileModule {
}
