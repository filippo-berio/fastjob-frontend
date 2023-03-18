import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExecutorHomeFacade } from 'src/app/core/home/facade/executor-home.facade';
import { TaskInterface } from 'src/app/core/task/data/task.interface';

@Component({
    selector: 'fj-executor-home',
    templateUrl: './executor-home.component.html',
    styleUrls: ['./executor-home.component.scss'],
})
export class ExecutorHomeComponent implements OnInit {
    loading$: Observable<boolean>;
    task: TaskInterface;
    rerenderCardTrigger = 0;

    constructor(
        private facade: ExecutorHomeFacade,
        private changeDetectorRef: ChangeDetectorRef,
    ) {
    }

    ngOnInit() {
        this.facade.currentTask$.subscribe(task => {
            this.task = task;
            this.rerenderCardTrigger++;
            this.changeDetectorRef.detectChanges();
        })
        this.facade.init();
    }

}
