import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { RouterModule, Routes } from '@angular/router';
import { CredentialsGuard } from '../../../core/auth/core/guards/credentials.guard';
import { ProfileGuard } from '../../../core/profile/core/guards/profile.guard';
import { MenuMobileModule } from '../menu/menu-mobile.module';
import { TuiButtonModule } from '@taiga-ui/core';


const routes: Routes = [
    {
        path: '',
        component: SettingsComponent,
    }
];

@NgModule({
    declarations: [
        SettingsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MenuMobileModule,
        TuiButtonModule
    ]
})
export class SettingsMobileModule {
}
