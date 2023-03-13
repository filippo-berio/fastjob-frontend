import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskExecutorsBaseComponent } from '../base/task-executors.base.component';

@Component({
    selector: 'fj-author-task-list-item',
    templateUrl: './author-task-list-item.component.html',
    styleUrls: ['./author-task-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorTaskListItemComponent extends TaskExecutorsBaseComponent  {
}
