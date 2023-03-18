import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[rerender]',
})
export class RerenderDirective {
    constructor(
        private templateRef: TemplateRef<unknown>,
        private viewContainer: ViewContainerRef,
    ) {
    }

    @Input() public set rerender(trigger: any) {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
    }
}
