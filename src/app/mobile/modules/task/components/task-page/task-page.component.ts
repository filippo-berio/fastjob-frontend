import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { DynamicDirective } from '../../../../../core/shared/directives/dynamic.directive';
import { AppMode } from '../../../../../core/settings/data/app-mode.type';
import { AuthorTasksComponent } from '../author/author-tasks/author-tasks.component';
import { ExecutorTasksComponent } from '../executor/executor-tasks/executor-tasks.component';
import { SettingsService } from '../../../../../core/settings/service/settings.service';
import { TaskInterface } from '../../../../../core/task/data/task.interface';

@Component({
    selector: 'fj-task-page',
    templateUrl: './task-page.component.html',
    styleUrls: ['./task-page.component.scss'],
})
export class TaskPageComponent implements ViewWillEnter {
    @ViewChild(DynamicDirective, {
        static: true
    }) container: DynamicDirective;

    openedTask: TaskInterface | null = null;

    private contentComponents: Record<AppMode, Type<any>> = {
        author: AuthorTasksComponent,
        executor: ExecutorTasksComponent,
    };

    constructor(
        private settingsService: SettingsService,
    ) {
    }

    ionViewWillEnter() {
        const component = this.contentComponents[this.settingsService.currentMode];
        this.container.viewContainerRef.clear();
        const componentRef = this.container.viewContainerRef.createComponent(component);
        componentRef.instance.openTask.subscribe((task: TaskInterface) => this.openTaskModal(task));
    }

    private openTaskModal(task: TaskInterface) {
        this.openedTask = task;
    }
}
