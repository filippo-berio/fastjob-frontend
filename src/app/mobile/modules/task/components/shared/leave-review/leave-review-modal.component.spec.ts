import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeaveReviewModalComponent } from './leave-review-modal.component';

describe('LeaveTaskReviewModalComponent', () => {
    let component: LeaveReviewModalComponent;
    let fixture: ComponentFixture<LeaveReviewModalComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [LeaveReviewModalComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(LeaveReviewModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
