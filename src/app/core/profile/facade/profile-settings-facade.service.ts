import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProfileApi } from '../core/api/profile.api';
import { ProfileInterface } from '../core/data/profile.interface';
import { ProfileFormBuilder } from '../core/form/profile.form-builder';
import { ProfileService } from '../core/service/profile.service';
import { ProfileStore } from '../core/store/profile.store';

@Injectable({
    providedIn: 'root'
})
export class ProfileSettingsFacade {
    private profileForm: FormGroup;

    constructor(
        private store: ProfileStore,
        private profileService: ProfileService,
        private profileApi: ProfileApi,
        private formBuilder: ProfileFormBuilder,
    ) {
    }

    profile$(): Observable<ProfileInterface> {
        this.profileService.get();
        return this.store.profile$ as Observable<ProfileInterface>;
    }

    buildForm(): FormGroup {
        this.profileForm = this.formBuilder.buildProfileForm(this.store.profile$.value!);
        return this.profileForm;
    }

    update() {
        const profile = this.store.profile$.value;
        profile!.lastName = this.profileForm.get('lastName')?.value;
        profile!.description = this.profileForm.get('description')?.value;
        profile!.firstName = this.profileForm.get('firstName')?.value;
        this.store.profile$.next(profile);
        this.profileApi.update(profile!).subscribe();
    }
}
