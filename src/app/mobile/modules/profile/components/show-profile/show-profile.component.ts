import { Component, Input, OnInit } from '@angular/core';
import { ProfileInterface } from '../../../../../core/profile/core/data/profile.interface';
import { getProfileMainPhotoPath } from '../../../../../core/profile/core/util/profile-photo.utils';
import {
    getProfileRepresentation
} from '../../../../../core/profile/core/util/profile-representation';

@Component({
    selector: 'fj-show-profile',
    templateUrl: './show-profile.component.html',
    styleUrls: ['./show-profile.component.scss'],
})
export class ShowProfileComponent implements OnInit {

    @Input() profile: ProfileInterface;
    mainPhotoPath: string;

    profileTitle: string;

    constructor() {
    }

    ngOnInit() {
        this.profileTitle = getProfileRepresentation(this.profile);
        this.mainPhotoPath = getProfileMainPhotoPath(this.profile) ?? '';
    }

}
