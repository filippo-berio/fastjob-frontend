import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { LocationModule } from '../../../core/location/location.module';
import { TaskModule } from '../../../core/task/task.module';
import { UiModule } from '../../../lib/ui/ui.module';
import { CategoryMobileModule } from '../category/category-mobile.module';
import { AuthorTaskListItemComponent } from './components/author/author-task-list-item/author-task-list-item.component';
import { ShowExecutorModalComponent } from './components/author/show-executor-modal/show-executor-modal.component';
import {
    ExecutorTaskListItemComponent
} from './components/executor/executor-task-list-item/executor-task-list-item.component';
import {
    ExecutorTaskTypeListComponent
} from './components/executor/executor-task-type-list/executor-task-type-list.component';
import { TaskListModalComponent } from './components/shared/task-list-modal/task-list-modal.component';
import { TaskListComponent } from './components/shared/task-list/task-list.component';
import { TaskPhotosSliderComponent } from './components/shared/task-photos-slider/task-photos-slider.component';
import { TaskPageComponent } from './components/task-page/task-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../core/shared/shared.module';
import { AuthorTasksComponent } from './components/author/author-tasks/author-tasks.component';
import { ExecutorTasksComponent } from './components/executor/executor-tasks/executor-tasks.component';
import { TaskListItemComponent } from './components/shared/task-list-item/task-list-item.component';
import { IonicModule } from '@ionic/angular';
import { TaskComponent } from './components/shared/task/task.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { AuthorTaskActionsComponent } from './components/author/author-task-actions/author-task-actions.component';
import { ExecutorTaskActionsComponent } from './components/executor/executor-task-actions/executor-task-actions.component';
import { TaskMatchesComponent } from './components/author/task-matches/task-matches.component';
import { ShowExecutorComponent } from './components/author/show-executor/show-executor.component';
import { ProfileMobileModule } from '../profile/profile-mobile.module';
import { FinishTaskComponent } from './components/author/finish-task/finish-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiAccordionModule, TuiCarouselModule, TuiRatingModule, TuiTextAreaModule } from '@taiga-ui/kit';

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
        TaskListComponent,
        TaskPhotosSliderComponent,
        ShowExecutorModalComponent,
        ExecutorTaskListItemComponent,
        TaskListModalComponent,
        ExecutorTaskTypeListComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        MatDialogModule,
        IonicModule,
        TuiLoaderModule,
        TuiButtonModule,
        ProfileMobileModule,
        ReactiveFormsModule,
        TuiTextAreaModule,
        TuiRatingModule,
        TuiCurrencyPipeModule,
        CategoryMobileModule,
        TuiCarouselModule,
        LocationModule,
        TaskModule,
        TuiAccordionModule,
        UiModule,
    ],
    exports: [
    ],
    providers: []
})
export class TaskMobileModule {
}
