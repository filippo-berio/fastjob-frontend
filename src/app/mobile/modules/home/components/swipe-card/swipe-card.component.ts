import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input, OnChanges,
    Output,
    SimpleChanges,
    Type,
    ViewChild
} from '@angular/core';
import { Swipeable } from '../../../../../core/home/data/swipeable.interface';
import { DynamicDirective } from '../../../../../core/shared/directives/dynamic.directive';
import { SwipeDirection } from '../../../../../core/ui/data/swipe-direction';

@Component({
    selector: 'fj-swipe-card',
    templateUrl: './swipe-card.component.html',
    styleUrls: ['./swipe-card.component.scss'],
})
export class SwipeCardComponent implements AfterViewInit, OnChanges {
    @ViewChild(DynamicDirective, {
        static: false
    }) cardContainer: DynamicDirective;

    @Input() cardComponent: Type<any>;
    @Input() card: Swipeable;
    @Output() accept = new EventEmitter();
    @Output() reject = new EventEmitter();

    private swipeDirectionEmitterMap = new Map<SwipeDirection, EventEmitter<any>>([
        ['left', this.accept],
        ['right', this.reject],
    ]);
    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.cardContainer) {
            this.drawCard();
        }
    }

    ngAfterViewInit() {
        this.drawCard();
    }

    onSwipe(direction: SwipeDirection) {
        this.swipeDirectionEmitterMap.get(direction)?.emit();
    }

    private drawCard() {
        const viewContainerRef = this.cardContainer.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(this.cardComponent);
        componentRef.instance.card = this.card;
    }
}
