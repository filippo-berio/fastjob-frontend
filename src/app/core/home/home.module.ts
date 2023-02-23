import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredentialsGuard } from '../auth/core/guards/credentials.guard';
import { ProfileGuard } from '../profile/core/guards/profile.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    providers: [
    ],
})
export class HomeModule {
    public static homeRouteGuards = [
        CredentialsGuard,
        ProfileGuard,
    ];
}
