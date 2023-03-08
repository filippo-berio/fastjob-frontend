import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthorTaskListItemComponent } from './author-task-list-item.component';

describe('AuthorTaskListItemComponent', () => {
    let component: AuthorTaskListItemComponent;
    let fixture: ComponentFixture<AuthorTaskListItemComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AuthorTaskListItemComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(AuthorTaskListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
