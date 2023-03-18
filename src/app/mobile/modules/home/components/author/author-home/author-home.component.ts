import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileInterface } from 'src/app/core/profile/core/data/profile.interface';
import { AuthorHomeFacade } from '../../../../../../core/home/facade/author-home.facade';

@Component({
    selector: 'fj-author-home',
    templateUrl: './author-home.component.html',
    styleUrls: ['./author-home.component.scss'],
})
export class AuthorHomeComponent implements OnInit {
    loading$: Observable<boolean>;
    executor: ProfileInterface | null;
    rerenderCardTrigger = 0;

    constructor(
        private facade: AuthorHomeFacade,
        private changeDetectorRef: ChangeDetectorRef,
    ) {
    }

    ngOnInit() {
        this.loading$ = this.facade.loading$;
        this.facade.currentExecutor$.subscribe(executor => {
            this.executor = executor;
            this.changeDetectorRef.detectChanges()
            this.rerenderCardTrigger++;
        });
        this.facade.init();
    }
}
