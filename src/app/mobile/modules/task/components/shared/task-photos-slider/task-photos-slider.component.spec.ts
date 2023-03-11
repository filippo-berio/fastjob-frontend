import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskPhotosSliderComponent } from './task-photos-slider.component';

describe('TaskPhotosComponent', () => {
    let component: TaskPhotosSliderComponent;
    let fixture: ComponentFixture<TaskPhotosSliderComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TaskPhotosSliderComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(TaskPhotosSliderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
