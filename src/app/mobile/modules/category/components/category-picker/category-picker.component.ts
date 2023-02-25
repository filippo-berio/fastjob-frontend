import { Component, EventEmitter, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TuiHandler } from '@taiga-ui/cdk';
import { CategoryInterface } from 'src/app/core/categories/data/category.interface';
import { CategoryPickerService } from '../../../../../core/categories/service/category-picker.service';
import {
    CategoryBranchInterface,
    CategoryTreeService
} from '../../../../../core/categories/service/category-tree.service';

@Component({
    selector: 'fj-category-picker',
    templateUrl: './category-picker.component.html',
    styleUrls: ['./category-picker.component.scss'],
    providers: [],
})
export class CategoryPickerComponent implements OnInit {
    checked: CategoryInterface[];

    select = new EventEmitter<CategoryInterface[]>();
    tree: CategoryBranchInterface[];

    private categoryPicker: CategoryPickerService;

    childrenHandler: TuiHandler<
        CategoryBranchInterface,
        CategoryBranchInterface[]
    > = (branch) => branch.children;

    getValue = (item: CategoryBranchInterface): boolean => {
        return this.categoryPicker.isCategoryPicked(item);
    };

    constructor(
        private categoryTreeService: CategoryTreeService,
        private domSanitizer: DomSanitizer,
    ) {
    }

    ngOnInit() {
        this.categoryPicker = new CategoryPickerService(this.checked);
        this.categoryTreeService.getTree().subscribe(t => {
            this.tree = t
        });
    }

    getIcon(category: CategoryBranchInterface) {
        return this.domSanitizer.bypassSecurityTrustHtml(category.icon);
    }

    submit() {
        this.select.emit(this.categoryPicker.getPicked());
    }

    onChecked(branch: CategoryBranchInterface): void {
        this.categoryPicker.checkCategory(branch);
    }
}
