import { ChangeDetectionStrategy, Component, EventEmitter, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CategoryInterface } from 'src/app/core/categories/data/category.interface';
import {
    CategoryBranchInterface,
    CategoryTreeService
} from '../../../../../core/categories/service/category-tree.service';

@Component({
    selector: 'fj-category-picker',
    templateUrl: './category-picker.component.html',
    styleUrls: ['./category-picker.component.scss'],
    providers: [
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryPickerComponent implements OnInit {
    selected = new EventEmitter<CategoryInterface[]>();
    tree: CategoryBranchInterface[];

    constructor(
        private categoryTreeService: CategoryTreeService,
        private domSanitizer: DomSanitizer,
    ) {
    }

    ngOnInit() {
        this.categoryTreeService.getTree().subscribe(t => {
            this.tree = t
            console.log(t);
        });
    }
}
