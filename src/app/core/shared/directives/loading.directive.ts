import { Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { Observable, take } from 'rxjs';
import { TuiLoaderComponent } from '@taiga-ui/core';

@Directive({
    selector: '[loading]'
})
export class LoadingDirective implements OnInit {
    @Input() loaded$ = new Observable();

    constructor(public viewContainerRef: ViewContainerRef) {
    }

    ngOnInit() {
        const original = this.viewContainerRef.get(0);
        console.log(original);
        // this.viewContainerRef.remove(0);
        // const componentRef = this.viewContainerRef.createComponent(TuiLoaderComponent);
        // this.loaded$.pipe(
        //     take(1)
        // ).subscribe(() => {
        //     componentRef.destroy();
        //     if (original) {
        //         this.viewContainerRef.insert(original, 0);
        //     }
        // });
    }
}
