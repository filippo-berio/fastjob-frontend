import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskPricePipe } from './pipes/task-price.pipe';


@NgModule({
    declarations: [
        TaskPricePipe,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TaskPricePipe,
    ]
})
export class TaskModule {
}
