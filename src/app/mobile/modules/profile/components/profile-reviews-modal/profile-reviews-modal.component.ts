import { Component, OnInit } from '@angular/core';
import { ProfileInterface } from '../../../../../core/profile/core/data/profile.interface';

@Component({
    selector: 'fj-profile-reviews-modal',
    templateUrl: './profile-reviews-modal.component.html',
    styleUrls: ['./profile-reviews-modal.component.scss'],
})
export class ProfileReviewsModalComponent implements OnInit {
    profile: ProfileInterface | null = null;

    constructor() {
    }

    ngOnInit() {
    }

    open(profile: ProfileInterface) {
        this.profile = profile;
    }
}
