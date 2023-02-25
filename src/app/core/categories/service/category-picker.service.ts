import { CategoryInterface } from '../data/category.interface';

export class CategoryPickerService {
    constructor(
        private picked: CategoryInterface[] = []
    ) {
    }

    getPicked(): CategoryInterface[] {
        return this.picked;
    }

    checkCategory(category: CategoryInterface) {
        if (this.isCategoryPicked(category)) {
            this.removeCategory(category);
        } else {
            this.addCategory(category);
        }
    }

    isCategoryPicked(category: CategoryInterface): boolean {
        return !!this.picked.find(c => c.id === category.id);
    }

    private addCategory(category: CategoryInterface) {
        this.picked.push(category);
    }

    private removeCategory(category: CategoryInterface) {
        this.picked = this.picked.filter(c => c.id !== category.id);
    }
}
