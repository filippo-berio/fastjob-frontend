import {
    AfterViewChecked,
    Directive,
    ElementRef,
    Input,
    OnChanges,
    OnInit,
    Renderer2,
    SimpleChanges
} from '@angular/core';

@Directive({
    selector: '[withClickHandlers]'
})
export class WithClickHandlersDirective implements AfterViewChecked {
    @Input() clickHandlers: Record<string, () => any>;

    private handledSelectors: string[] = [];

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
    ) {
    }

    ngAfterViewChecked() {
        Object.keys(this.clickHandlers).forEach(selector => {
            const element = this.el.nativeElement as HTMLElement;
            const elementToHandle = element.querySelector(selector);
            if (elementToHandle) {
                if (this.handledSelectors.indexOf(selector) === -1) {
                    this.handledSelectors.push(selector);
                    this.renderer.listen(elementToHandle, 'click', this.clickHandlers[selector]);
                }
            } else {
                this.handledSelectors = this.handledSelectors.filter(s => s !== selector);
            }
        })
    }
}
