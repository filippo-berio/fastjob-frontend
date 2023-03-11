import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDirective } from './directives/dynamic.directive';
import { LoadingDirective } from './directives/loading.directive';
import { TuiLoaderModule } from '@taiga-ui/core';
import { WithClickHandlersDirective } from './directives/with-click-handlers.directive';

const declarations = [
    DynamicDirective,
    LoadingDirective,
    WithClickHandlersDirective,
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
