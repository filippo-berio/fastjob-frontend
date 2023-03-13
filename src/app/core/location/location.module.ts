import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressPipe } from './pipes/address.pipe';

const declarations = [
    AddressPipe,
];

@NgModule({
    declarations,
    imports: [
        CommonModule
    ],
    exports: declarations,
})
export class LocationModule {
}
