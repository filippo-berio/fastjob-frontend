import { Component, Input, OnInit } from '@angular/core';
import { Swipeable } from '../../../../../core/home/data/swipeable.interface';

@Component({
    selector: 'fj-executor-card',
    templateUrl: './executor-card.component.html',
    styleUrls: ['./executor-card.component.scss'],
})
export class ExecutorCardComponent implements OnInit {
    @Input() card: Swipeable;

    ngOnInit() {
    }
}
