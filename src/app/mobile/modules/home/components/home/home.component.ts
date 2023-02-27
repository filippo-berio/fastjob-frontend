import { Component, OnInit } from '@angular/core';
import { HomeFacade } from '../../../../../core/home/facade/home.facade';
import { ProfileInterface } from '../../../../../core/profile/core/data/profile.interface';
import { Swipeable } from '../../../../../core/home/data/swipeable.interface';

@Component({
    selector: 'fj-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    profile: ProfileInterface;
    card: Swipeable | null;

    constructor(
        private facade: HomeFacade,
    ) {
    }

    ngOnInit() {
        this.facade.profile$().subscribe(p => this.profile = p);
        this.facade.currentCard$.subscribe(card => this.card = card)
        this.facade.init().subscribe(hasNext => {
            if (!hasNext) {
                console.error('NO TASK LEFT')
            }
        });
    }

    isProfileConfigured(): boolean {
        return this.profile.categories.length > 0;
    }

    accept() {
        this.facade.swipe('accept');
    }

    reject() {
        this.facade.swipe('reject');
    }
}
