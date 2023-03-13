import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TuiFilterPipeModule } from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule
} from '@taiga-ui/core';
import { CircleButtonComponent } from './components/circle-button/circle-button.component';
import { SelectTypeaheadComponent } from './components/select-modal/select-typeahead.component';
import { SliderComponent } from './components/slider/slider.component';
import { SwipeableDirective } from './directives/swipeable.directive';

const declarations = [
    SelectTypeaheadComponent,
    SwipeableDirective,
    SliderComponent,
    CircleButtonComponent,
];

@NgModule({
    declarations,
    imports: [
        CommonModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiDataListModule,
        TuiFilterPipeModule,
        TuiButtonModule,
        IonicModule
    ],
    exports: declarations,
})
export class UiModule {
}
