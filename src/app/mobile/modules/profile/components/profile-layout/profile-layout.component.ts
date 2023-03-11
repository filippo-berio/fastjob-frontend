import { Component, Input, OnInit } from '@angular/core';
import { profilePhotoPlaceholder } from '../../../../../core/profile/core/data/profile-photo-placeholder';
import { ProfileInterface } from '../../../../../core/profile/core/data/profile.interface';
import { getProfileMainPhotoPath } from '../../../../../core/profile/core/util/profile-photo.utils';
import { getProfileRepresentation } from '../../../../../core/profile/core/util/profile-representation';

@Component({
    selector: 'fj-profile-layout',
    templateUrl: './profile-layout.component.html',
    styleUrls: ['./profile-layout.component.scss'],
})
export class ProfileLayoutComponent implements OnInit {
    @Input() profile: ProfileInterface;

    profileRepresentation: string;
    mainPhotoPath: string;

    constructor() {
    }

    ngOnInit() {
        this.profileRepresentation = getProfileRepresentation(this.profile);
        this.mainPhotoPath = getProfileMainPhotoPath(this.profile) ?? profilePhotoPlaceholder;
    }


}
