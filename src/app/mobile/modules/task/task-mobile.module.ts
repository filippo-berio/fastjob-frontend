import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorTaskListItemComponent } from './components/author-task-list-item/author-task-list-item.component';
import { TaskPageComponent } from './components/task-page/task-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuMobileModule } from '../menu/menu-mobile.module';
import { SharedModule } from '../../../core/shared/shared.module';
import { AuthorTasksComponent } from './components/author-tasks/author-tasks.component';
import { ExecutorTasksComponent } from './components/executor-tasks/executor-tasks.component';
import { TaskListItemComponent } from './components/task-list-item/task-list-item.component';
import { IonicModule } from '@ionic/angular';
import { TaskComponent } from './components/task/task.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { AuthorTaskActionsComponent } from './components/author-task-actions/author-task-actions.component';
import { ExecutorTaskActionsComponent } from './components/executor-task-actions/executor-task-actions.component';
import { TaskMatchesComponent } from './components/task-matches/task-matches.component';
import { ShowExecutorComponent } from './components/show-executor/show-executor.component';
import { ProfileMobileModule } from '../profile/profile-mobile.module';
import { FinishTaskComponent } from './components/finish-task/finish-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiRatingModule, TuiTextAreaModule } from '@taiga-ui/kit';

const routes: Routes = [
    {
        path: '',
        component: TaskPageComponent,
    }
];

@NgModule({
    declarations: [
        TaskPageComponent,
        AuthorTasksComponent,
        ExecutorTasksComponent,
        TaskListItemComponent,
        TaskComponent,
        AuthorTaskActionsComponent,
        ExecutorTaskActionsComponent,
        TaskMatchesComponent,
        ShowExecutorComponent,
        FinishTaskComponent,
        AuthorTaskListItemComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MenuMobileModule,
        SharedModule,
        MatDialogModule,
        IonicModule,
        TuiLoaderModule,
        TuiButtonModule,
        ProfileMobileModule,
        ReactiveFormsModule,
        TuiTextAreaModule,
        TuiRatingModule,
    ],
    exports: [
    ],
    providers: []
})
export class TaskMobileModule {
}
