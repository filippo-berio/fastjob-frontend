import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPickerComponent } from './components/city-picker/city-picker.component';
import { UiModule } from 'src/app/lib/ui/ui.module';


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
