import { Component, OnInit } from '@angular/core';
import { ProfileInterface } from '../../../../../core/profile/core/data/profile.interface';

@Component({
    selector: 'fj-show-profile-modal',
    templateUrl: './show-profile-modal.component.html',
    styleUrls: ['./show-profile-modal.component.scss'],
})
export class ShowProfileModalComponent implements OnInit {
    opened = false;
    profile: ProfileInterface;

    constructor() {
    }

    ngOnInit() {
    }

    open(profile: ProfileInterface) {
        this.profile = profile;
        this.opened = true;
    }
}
