import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDirective } from './directives/dynamic.directive';

const declarations = [
    DynamicDirective,
];

@NgModule({
    declarations,
    imports: [
        CommonModule,
    ],
    exports: declarations,
    providers: [
    ]
})
export class SharedModule {
}
