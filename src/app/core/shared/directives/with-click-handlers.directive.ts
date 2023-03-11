import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[withClickHandlers]'
})
export class WithClickHandlersDirective implements OnInit {
    @Input() clickHandlers: Record<string, () => any>;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
    ) {
    }

    ngOnInit() {
        Object.keys(this.clickHandlers).forEach(selector => {
            const element = this.el.nativeElement as HTMLElement;
            const elementToHandle = element.querySelector(selector);
            if (elementToHandle) {
                this.renderer.listen(elementToHandle, 'click', this.clickHandlers[selector]);
            }
        })
    }
}
