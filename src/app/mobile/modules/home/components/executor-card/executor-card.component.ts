import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { profilePhotoPlaceholder } from '../../../../../core/profile/core/data/profile-photo-placeholder';
import { ProfileInterface } from '../../../../../core/profile/core/data/profile.interface';

@Component({
    selector: 'fj-executor-card',
    templateUrl: './executor-card.component.html',
    styleUrls: ['./executor-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExecutorCardComponent {
    @Input() executor: ProfileInterface;
    placeholder = profilePhotoPlaceholder;
}
