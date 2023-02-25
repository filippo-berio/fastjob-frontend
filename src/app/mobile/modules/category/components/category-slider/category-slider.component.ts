import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CategoryInterface } from '../../../../../core/categories/data/category.interface';

@Component({
    selector: 'fj-category-slider',
    templateUrl: './category-slider.component.html',
    styleUrls: ['./category-slider.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategorySliderComponent implements OnInit {
    @Input() categories: CategoryInterface[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
