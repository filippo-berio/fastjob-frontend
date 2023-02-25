import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../../../core/ui/ui.module';
import { CityPickerComponent } from './components/city-picker/city-picker.component';


@NgModule({
    declarations: [
        CityPickerComponent,
    ],
    imports: [
        CommonModule,
        UiModule,
    ],
    exports: [
        CityPickerComponent,
    ]
})
export class LocationMobileModule {
}
