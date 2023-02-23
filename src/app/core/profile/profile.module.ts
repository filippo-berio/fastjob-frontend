import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputDateModule, TuiInputModule } from '@taiga-ui/kit';
import { AuthInterceptor } from '../auth/core/interceptors/auth.interceptor';
import { SharedModule } from '../shared/shared.module';
import { ProfileApi } from './core/api/profile.api';
import { NoProfileGuard } from './core/guards/no-profile.guard';
import { ProfileGuard } from './core/guards/profile.guard';
import { ProfileService } from './core/service/profile.service';
import { ProfileStore } from './core/store/profile.store';
import { RegistrationFacade } from './facade/registration.facade';
import { RegisterProfileComponent } from './presentation/components/register-profile/register-profile.component';
import { ProfileComponent } from './presentation/components/profile/profile.component';


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
        SharedModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        }
    ],
    exports: [
        RouterModule,
    ]
})
export class ProfileModule {
}
