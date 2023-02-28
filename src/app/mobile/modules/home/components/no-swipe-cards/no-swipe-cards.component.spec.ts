import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoSwipeCardsComponent } from './no-swipe-cards.component';

describe('NoSwipeCardsComponent', () => {
    let component: NoSwipeCardsComponent;
    let fixture: ComponentFixture<NoSwipeCardsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [NoSwipeCardsComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(NoSwipeCardsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
