import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectTypeaheadComponent } from './select-typeahead.component';

describe('SelectModalComponent', () => {
    let component: SelectTypeaheadComponent;
    let fixture: ComponentFixture<SelectTypeaheadComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [SelectTypeaheadComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(SelectTypeaheadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
