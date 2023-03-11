import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ProfileInterface } from '../../../../../core/profile/core/data/profile.interface';
import {
    getProfileInitials,
    getProfileMainPhotoPath
} from '../../../../../core/profile/core/util/profile-photo.utils';

@Component({
    selector: 'fj-profile-icon',
    templateUrl: './profile-icon.component.html',
    styleUrls: ['./profile-icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileIconComponent implements OnInit {
    @Input() profile: ProfileInterface;
    @Input() size: 'xs' | 'xl';
    @Input() ring: 'ring-white' | 'ring-black' = 'ring-white';

    imgClass: string;
    placeholder: string;
    placeholderClass: string;
    photoPath?: string;

    private iconSizeMap = {
        xs: {
            img: 'h-8 w-8',
            placeholder: 'text-xs'
        },
        xl: {
            img: 'h-36 w-36',
            placeholder: 'text-5xl'
        }
    };

    constructor() {
    }

    ngOnInit() {
        this.photoPath = getProfileMainPhotoPath(this.profile);
        this.placeholder = getProfileInitials(this.profile);
        this.imgClass = this.iconSizeMap[this.size].img;
        this.placeholderClass = this.iconSizeMap[this.size].placeholder;
    }
}
