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
    @Input() showMissing = true;

    profileRepresentation: string;
    mainPhotoPath: string;
    rating?: number;

    constructor() {
    }

    ngOnInit() {
        this.profileRepresentation = getProfileRepresentation(this.profile);
        this.mainPhotoPath = getProfileMainPhotoPath(this.profile) ?? profilePhotoPlaceholder;
        if (this.profile.reviews.length) {
            this.rating = this.profile.reviews
                .map(r => r.rating)
                .reduce((a, b) => a + b)
                / this.profile.reviews.length;
        }
    }


}
