import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExecutorTaskListItemComponent } from './executor-task-list-item.component';

describe('ExecutorTaskListItemComponent', () => {
    let component: ExecutorTaskListItemComponent;
    let fixture: ComponentFixture<ExecutorTaskListItemComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ExecutorTaskListItemComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(ExecutorTaskListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
