import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiFilterPipeModule } from '@taiga-ui/cdk';
import { TuiDataListModule, TuiPrimitiveTextfieldModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { SelectTypeaheadComponent } from './components/select-modal/select-typeahead.component';

const declarations = [
    SelectTypeaheadComponent,
];

@NgModule({
    declarations,
    imports: [
        CommonModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiDataListModule,
        TuiFilterPipeModule
    ],
    exports: declarations,
})
export class UiModule {
}
