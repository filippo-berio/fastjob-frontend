import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CategoryApi } from '../api/category.api';
import { CategoryInterface } from '../data/category.interface';

export interface CategoryBranchInterface extends CategoryInterface {
    level: number;
    parent?: CategoryBranchInterface;
    children: CategoryBranchInterface[];
}

@Injectable({
    providedIn: 'root'
})
export class CategoryTreeService {
    private categoryLevels: Record<number, number> = {};

    constructor(
        private api: CategoryApi,
    ) {
    }

    getTree(): Observable<CategoryBranchInterface[]> {
        return this.api.getTree().pipe(
            map(list => {
                this.fillLevels(list);
                return list.map(c => this.getCategoryBranch(c))
            })
        );
    }

    private fillLevels(categories: CategoryInterface[], level: number = 1) {
        categories.forEach(c => {
            this.categoryLevels[c.id] = level;
            this.fillLevels(c.children, level + 1);
        });
    }

    private getCategoryBranch(category: CategoryInterface): CategoryBranchInterface {
        return {
            ...category,
            level: this.categoryLevels[category.id],
            children: category.children.map(c => {
                return {
                    ...this.getCategoryBranch(c),
                    parent: category
                } as CategoryBranchInterface;
            })
        }
    }
}
