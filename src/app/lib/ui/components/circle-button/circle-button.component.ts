import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'fj-circle-button',
    templateUrl: './circle-button.component.html',
    styleUrls: ['./circle-button.component.scss'],
})
export class CircleButtonComponent implements OnInit {

    @Input() icon: string;
    @Input() disabled: boolean;

    constructor() {
    }

    ngOnInit() {
    }

}
