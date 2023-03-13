import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TuiMapperPipeModule } from '@taiga-ui/cdk';
import { TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';
import { TuiBadgeModule, TuiCarouselModule, TuiCheckboxLabeledModule, TuiTreeModule } from '@taiga-ui/kit';
import { CategoryPickerComponent } from './components/category-picker/category-picker.component';
import { CategorySliderComponent } from './components/category-slider/category-slider.component';


@NgModule({
    declarations: [
        CategorySliderComponent,
        CategoryPickerComponent,
    ],
    imports: [
        CommonModule,
        TuiBadgeModule,
        TuiTreeModule,
        TuiCheckboxLabeledModule,
        FormsModule,
        TuiMapperPipeModule,
        TuiButtonModule,
        TuiLoaderModule,
        TuiCarouselModule
    ],
    exports: [
        CategorySliderComponent,
        CategoryPickerComponent,
    ]
})
export class CategoryMobileModule {
}
