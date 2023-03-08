import { Component, Input, OnInit, Type, ViewChild } from '@angular/core';
import { TaskInterface } from '../../../../../../core/task/data/task.interface';
import { DynamicDirective } from '../../../../../../core/shared/directives/dynamic.directive';
import { AppMode } from '../../../../../../core/settings/data/app-mode.type';
import { ExecutorTaskActionsComponent } from '../../executor/executor-task-actions/executor-task-actions.component';
import { AuthorTaskActionsComponent } from '../../author/author-task-actions/author-task-actions.component';
import { SettingsService } from '../../../../../../core/settings/service/settings.service';

@Component({
    selector: 'fj-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
    @ViewChild(DynamicDirective, {
        static: true
    }) actionsContainer: DynamicDirective;

    @Input() task: TaskInterface;

    private actionComponentMap: Record<AppMode, Type<any>> = {
        executor: ExecutorTaskActionsComponent,
        author: AuthorTaskActionsComponent,
    };

    constructor(
        private settings: SettingsService,
    ) {
    }

    ngOnInit() {
        this.initActionsContainer();
    }

    private initActionsContainer() {
        const component = this.actionComponentMap[this.settings.currentMode];
        const componentRef = this.actionsContainer.viewContainerRef.createComponent(component);
        componentRef.instance.task = this.task;
    }
}
