import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmStepCodeComponent } from './confirm-step-code.component';

describe('ConfirmStepCodeComponent', () => {
    let component: ConfirmStepCodeComponent;
    let fixture: ComponentFixture<ConfirmStepCodeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ConfirmStepCodeComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ConfirmStepCodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
