import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiFilterPipeModule } from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule
} from '@taiga-ui/core';
import { SelectTypeaheadComponent } from './components/select-modal/select-typeahead.component';
import { SwipeContainerComponent } from './components/swipe-container/swipe-container.component';

const declarations = [
    SelectTypeaheadComponent,
    SwipeContainerComponent,
];

@NgModule({
    declarations,
    imports: [
        CommonModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiDataListModule,
        TuiFilterPipeModule,
        TuiButtonModule
    ],
    exports: declarations,
})
export class UiModule {
}
