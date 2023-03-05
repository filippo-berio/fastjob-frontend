import { Component, Input, OnInit } from '@angular/core';
import { ProfileInterface } from '../../../../../core/profile/core/data/profile.interface';
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

    profileTitle: string;

    constructor() {
    }

    ngOnInit() {
        this.profileTitle = getProfileRepresentation(this.profile);
    }

}
