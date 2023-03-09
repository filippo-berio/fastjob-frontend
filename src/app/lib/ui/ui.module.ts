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
import { SwipeableDirective } from './directives/swipeable.directive';

const declarations = [
    SelectTypeaheadComponent,
    SwipeableDirective,
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
