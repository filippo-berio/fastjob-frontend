import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CityPickerComponent } from './city-picker.component';

describe('CityPickerComponent', () => {
    let component: CityPickerComponent;
    let fixture: ComponentFixture<CityPickerComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [CityPickerComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(CityPickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
