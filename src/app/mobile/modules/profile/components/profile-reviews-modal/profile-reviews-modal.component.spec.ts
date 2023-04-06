import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileReviewsModalComponent } from './profile-reviews-modal.component';

describe('ProfileReviewsModalComponent', () => {
    let component: ProfileReviewsModalComponent;
    let fixture: ComponentFixture<ProfileReviewsModalComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileReviewsModalComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(ProfileReviewsModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
