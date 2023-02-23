import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmStepPhoneComponent } from './confirm-step-phone.component';

describe('ConfirmStepPhoneComponent', () => {
    let component: ConfirmStepPhoneComponent;
    let fixture: ComponentFixture<ConfirmStepPhoneComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ConfirmStepPhoneComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ConfirmStepPhoneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
