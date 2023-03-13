import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProfileInterface } from '../../../../../core/profile/core/data/profile.interface';

@Component({
    selector: 'fj-profile-slider',
    templateUrl: './profile-slider.component.html',
    styleUrls: ['./profile-slider.component.scss'],
})
export class ProfileSliderComponent implements OnInit {

    @Input() profiles: ProfileInterface[];
    @Output() profileClick = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
    }

    onProfileClick(index: number) {
        this.profileClick.emit(index);
    }
}
