import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorHomeFacade } from '../../../../../../core/home/facade/author-home.facade';

@Component({
    selector: 'fj-author-home',
    templateUrl: './author-home.component.html',
    styleUrls: ['./author-home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorHomeComponent implements OnInit {
    executor$ = this.facade.executor$;
    loading$: Observable<boolean>;

    constructor(
        private facade: AuthorHomeFacade,
    ) {
    }

    ngOnInit() {
        this.loading$ = this.facade.loading$;
        this.facade.init();
    }
}
