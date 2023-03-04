import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDirective } from './directives/dynamic.directive';
import { LoadingDirective } from './directives/loading.directive';
import { TuiLoaderModule } from '@taiga-ui/core';

const declarations = [
    DynamicDirective,
    LoadingDirective,
];

@NgModule({
    declarations,
    imports: [
        CommonModule,
        TuiLoaderModule,
    ],
    exports: declarations,
    providers: [
    ]
})
export class SharedModule {
}
