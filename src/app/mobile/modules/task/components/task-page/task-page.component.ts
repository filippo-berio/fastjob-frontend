import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { DynamicDirective } from '../../../../../core/shared/directives/dynamic.directive';
import { AppMode } from '../../../../../core/settings/data/app-mode.type';
import { AuthorTasksComponent } from '../author-tasks/author-tasks.component';
import { ExecutorTasksComponent } from '../executor-tasks/executor-tasks.component';
import { SettingsService } from '../../../../../core/settings/service/settings.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskInterface } from '../../../../../core/task/data/task.interface';
import { TaskComponent } from '../task/task.component';
import { fullScreenConfig } from '../../../../../core/shared/data/mat-dialog.configs';

@Component({
    selector: 'fj-task-page',
    templateUrl: './task-page.component.html',
    styleUrls: ['./task-page.component.scss'],
})
export class TaskPageComponent implements OnInit {
    @ViewChild(DynamicDirective, {
        static: true
    }) container: DynamicDirective;

    private contentComponents: Record<AppMode, Type<any>> = {
        author: AuthorTasksComponent,
        executor: ExecutorTasksComponent,
    };

    constructor(
        private settingsService: SettingsService,
        private dialog: MatDialog,
    ) {
    }

    ngOnInit() {
        const component = this.contentComponents[this.settingsService.currentMode];
        this.container.viewContainerRef.clear();
        const componentRef = this.container.viewContainerRef.createComponent(component);
        componentRef.instance.openTask.subscribe((task: TaskInterface) => this.openTaskModal(task));
    }

    private openTaskModal(task: TaskInterface) {
        const modalRef = this.dialog.open(TaskComponent, {
            ...fullScreenConfig,
        });
        modalRef.componentInstance.task = task;
    }
}
