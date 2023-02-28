import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input, OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    Type,
    ViewChild
} from '@angular/core';
import { Swipeable } from '../../../../../core/home/data/swipeable.interface';
import { DynamicDirective } from '../../../../../core/shared/directives/dynamic.directive';

@Component({
    selector: 'fj-swipe-card',
    templateUrl: './swipe-card.component.html',
    styleUrls: ['./swipe-card.component.scss'],
})
export class SwipeCardComponent implements OnInit, AfterViewInit, OnChanges {
    @ViewChild(DynamicDirective, {
        static: false
    }) cardContainer: DynamicDirective;

    @Input() cardComponent: Type<any>;
    @Input() card: Swipeable;
    @Output() accept = new EventEmitter();
    @Output() reject = new EventEmitter();

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.cardContainer) {
            this.drawCard();
        }
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.drawCard();
    }

    onAccept() {
        this.accept.emit();
    }

    onReject() {
        this.reject.emit();
    }

    private drawCard() {
        const viewContainerRef = this.cardContainer.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(this.cardComponent);
        componentRef.instance.card = this.card;
    }
}
