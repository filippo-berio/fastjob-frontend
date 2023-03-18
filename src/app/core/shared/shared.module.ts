import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDirective } from './directives/dynamic.directive';
import { LoadingDirective } from './directives/loading.directive';
import { TuiLoaderModule } from '@taiga-ui/core';
import { RerenderDirective } from './directives/rerender.directive';
import { WithClickHandlersDirective } from './directives/with-click-handlers.directive';
import { MissingPipe } from './pipes/missing.pipe';

const declarations = [
    DynamicDirective,
    LoadingDirective,
    WithClickHandlersDirective,
    MissingPipe,
    RerenderDirective,
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
