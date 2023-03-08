import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthorTaskActionsComponent } from './author-task-actions.component';

describe('AuthorTaskActionsComponent', () => {
    let component: AuthorTaskActionsComponent;
    let fixture: ComponentFixture<AuthorTaskActionsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AuthorTaskActionsComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(AuthorTaskActionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
