import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CategoryInterface } from '../../categories/data/category.interface';
import { CityInterface } from '../../location/data/city.interface';
import { LocationApi } from '../../location/service/location.api';
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
        private locationApi: LocationApi,
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

    updateCategories(categories: CategoryInterface[]) {
        const profile = this.store.profile$.value;
        profile!.categories = categories;
        this.store.profile$.next(profile);
        this.profileApi.update(profile!).subscribe();
    }

    updateCity(city: CityInterface) {
        const profile = this.store.profile$.value;
        profile!.city = city;
        this.store.profile$.next(profile);
        this.profileApi.update(profile!).subscribe();
    }

    update() {
        const profile = this.store.profile$.value;
        profile!.lastName = this.profileForm.get('lastName')?.value;
        profile!.description = this.profileForm.get('description')?.value;
        profile!.firstName = this.profileForm.get('firstName')?.value;
        this.store.profile$.next(profile);
        this.profileApi.update(profile!).subscribe();
    }

    cities$(): Observable<CityInterface[]> {
        return this.locationApi.cityList();
    }
}
