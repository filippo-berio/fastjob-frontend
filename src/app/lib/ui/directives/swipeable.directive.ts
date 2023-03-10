import { Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { Haptics } from '@capacitor/haptics';
import { createGesture, GestureDetail } from '@ionic/angular';
import { SwipeDirection } from '../data/swipe-direction';

@Directive({
    selector: '[swipeable]'
})
export class SwipeableDirective implements OnInit {
    @Output() swipe = new EventEmitter<SwipeDirection>();

    private lastSwipeDirection?: SwipeDirection;

    private windowWidth = window.innerWidth;

    constructor(
        private hostElement: ElementRef,
    ) {
    }

    ngOnInit() {
        this.initGesture();
        this.windowWidth = window.innerWidth;
    }

    onSwipe(direction: SwipeDirection) {
        this.swipe.emit(direction);
    }

    private initGesture() {
        const style = this.hostElement.nativeElement.style;

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

                this.handleVibration(ev);
            },
            onEnd: (ev) => {
                style.transition = '0.3s ease-out';
                const swipeDirection = this.getCurrentSwipeDirection(ev);
                if (swipeDirection === 'right') {
                    style.transform = `translateX(${this.windowWidth * 1.5}px)`;
                    this.onSwipe('right');
                } else if (swipeDirection === 'left') {
                    style.transform = `translateX(-${this.windowWidth * 1.5}px)`;
                    this.onSwipe('left');
                } else {
                    style.transform = '';
                }
            },
        });

        gesture.enable()
    }

    private getCurrentSwipeDirection(ev: GestureDetail): SwipeDirection | null {
        if (ev.deltaX > this.windowWidth / 2) {
            return 'right';
        }
        if (ev.deltaX < -this.windowWidth / 2) {
            return 'left';
        }
        return null;
    }

    private handleVibration(ev: GestureDetail) {
        const direction = this.getCurrentSwipeDirection(ev);
        if (direction === this.lastSwipeDirection) {
            return;
        }
        if (!direction) {
            this.lastSwipeDirection = undefined;
            return;
        }
        this.lastSwipeDirection = direction;
        this.vibrate();
    }

    private vibrate() {
        Haptics.vibrate({
            duration: 50,
        }).then();
        console.log('Vibrating...')
    }
}
