import { Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { createGesture } from '@ionic/angular';
import { SwipeDirection } from '../data/swipe-direction';

@Directive({
    selector: '[swipeable]'
})
export class SwipeableDirective implements OnInit {
    @Output() swipe = new EventEmitter<SwipeDirection>();

    constructor(
        private hostElement: ElementRef,
        // private vibration: Vibration
    ) {
    }

    ngOnInit() {
        this.initGesture();
    }

    onSwipe(direction: SwipeDirection) {
        this.swipe.emit(direction);
    }

    private initGesture() {
        const style = this.hostElement.nativeElement.style;
        const windowWidth = window.innerWidth;

        const gesture = createGesture({
            el: this.hostElement.nativeElement,
            gestureName: 'tinder-swipe',
            onStart: () => {
                style.transition = 'none';
            },
            onMove: (ev) => {
                style.transform = `translateX(${ev.deltaX}px) rotate(${
                    ev.deltaX / 20
                }deg) translateY(${ev.deltaY}px)`;
            },
            onEnd: (ev) => {
                style.transition = '0.3s ease-out';

                if (ev.deltaX > windowWidth / 2) {
                    style.transform = `translateX(${windowWidth * 1.5}px)`;
                    // this.match.emit(true);
                } else if (ev.deltaX < -windowWidth / 2) {
                    style.transform = `translateX(-${windowWidth * 1.5}px)`;
                    // this.match.emit(false);
                } else {
                    style.transform = '';
                }
            },
        });

        gesture.enable()
    }
}
