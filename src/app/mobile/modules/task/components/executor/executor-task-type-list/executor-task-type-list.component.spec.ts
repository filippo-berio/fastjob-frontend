import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExecutorTaskTypeListComponent } from './executor-task-type-list.component';

describe('ExecutorTaskTypeListComponent', () => {
    let component: ExecutorTaskTypeListComponent;
    let fixture: ComponentFixture<ExecutorTaskTypeListComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ExecutorTaskTypeListComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(ExecutorTaskTypeListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
