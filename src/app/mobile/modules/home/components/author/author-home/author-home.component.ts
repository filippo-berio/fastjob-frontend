import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Swipeable } from '../../../../../../core/home/data/swipeable.interface';
import { HomeFacade } from '../../../../../../core/home/facade/home.facade';

@Component({
    selector: 'fj-author-home',
    templateUrl: './author-home.component.html',
    styleUrls: ['./author-home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorHomeComponent implements OnInit {
    @Input() card: Swipeable | null;

    loading$: Observable<boolean>;

    constructor(
        private facade: HomeFacade,
    ) {
    }

    ngOnInit() {
        this.loading$ = this.facade.loading$;
    }

    accept() {
        this.facade.swipe('accept');
    }

    reject() {
        this.facade.swipe('reject');
    }
}
