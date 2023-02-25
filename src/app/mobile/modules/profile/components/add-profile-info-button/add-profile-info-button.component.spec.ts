import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddProfileInfoButtonComponent } from './add-profile-info-button.component';

describe('AddProfileInfoComponent', () => {
    let component: AddProfileInfoButtonComponent;
    let fixture: ComponentFixture<AddProfileInfoButtonComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AddProfileInfoButtonComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(AddProfileInfoButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
