import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiLoaderModule } from '@taiga-ui/core';
import { CityPickerComponent } from './components/city-picker/city-picker.component';
import { UiModule } from 'src/app/lib/ui/ui.module';


@NgModule({
    declarations: [
        CityPickerComponent,
    ],
    imports: [
        CommonModule,
        UiModule,
        TuiLoaderModule,
    ],
    exports: [
        CityPickerComponent,
    ]
})
export class LocationMobileModule {
}
