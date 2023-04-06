import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ProfileInterface } from '../../../../../core/profile/core/data/profile.interface';

@Component({
    selector: 'fj-show-profile',
    templateUrl: './show-profile.component.html',
    styleUrls: ['./show-profile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowProfileComponent implements OnInit {

    @Input() profile: ProfileInterface;

    constructor() {
    }

    ngOnInit() {
    }

}
