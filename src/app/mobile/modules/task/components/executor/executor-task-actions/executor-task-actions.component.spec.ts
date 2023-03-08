import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExecutorTaskActionsComponent } from './executor-task-actions.component';

describe('ExecutorTaskActionsComponent', () => {
    let component: ExecutorTaskActionsComponent;
    let fixture: ComponentFixture<ExecutorTaskActionsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ExecutorTaskActionsComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(ExecutorTaskActionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
