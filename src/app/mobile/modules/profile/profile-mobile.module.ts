import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { Route } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputDateModule, TuiInputModule } from '@taiga-ui/kit';
import { NoProfileGuard } from '../../../core/profile/core/guards/no-profile.guard';
import { ProfileGuard } from '../../../core/profile/core/guards/profile.guard';
import { SharedModule } from '../../../core/shared/shared.module';
import { UiModule } from '../../../lib/ui/ui.module';
import { CategoryMobileModule } from '../category/category-mobile.module';
import { LocationMobileModule } from '../location/location-mobile.module';
import { SharedMobileModule } from '../shared/shared-mobile.module';
import { AddProfileInfoButtonComponent } from './components/add-profile-info-button/add-profile-info-button.component';
import { ProfileIconComponent } from './components/profile-icon/profile-icon.component';
import { ProfileLayoutComponent } from './components/profile-layout/profile-layout.component';
import { ProfileSliderComponent } from './components/profile-slider/profile-slider.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterProfileComponent } from './components/register-profile/register-profile.component';
import { ShowProfileComponent } from './components/show-profile/show-profile.component';


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
        AddProfileInfoButtonComponent,
        ShowProfileComponent,
        ProfileIconComponent,
        ProfileSliderComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiInputModule,
        TuiInputDateModule,
        TuiButtonModule,
        IonicModule,
        SharedMobileModule,
        MatDialogModule,
        CategoryMobileModule,
        LocationMobileModule,
        SharedModule,
        UiModule,
    ],
    exports: [
        AddProfileInfoButtonComponent,
        ShowProfileComponent,
        ProfileIconComponent,
        ProfileSliderComponent,
    ]
})
export class ProfileMobileModule {
}
