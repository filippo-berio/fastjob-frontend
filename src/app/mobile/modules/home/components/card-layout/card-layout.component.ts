import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ProfileInterface } from 'src/app/core/profile/core/data/profile.interface';
import { CategoryInterface } from '../../../../../core/categories/data/category.interface';
import { getProfileRepresentation } from '../../../../../core/profile/core/util/profile-representation';

@Component({
    selector: 'fj-card-layout',
    templateUrl: './card-layout.component.html',
    styleUrls: ['./card-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLayoutComponent implements OnInit {
    @Input() profile: ProfileInterface;
    @Input() categories: CategoryInterface[];

    ngOnInit() {
    }

    profileTitle() {
        return getProfileRepresentation(this.profile);
    }
}
