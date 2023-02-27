import { ProfileInterface } from '../../profile/core/data/profile.interface';
import { CategoryInterface } from '../../categories/data/category.interface';

export interface TaskInterface {
    id: number,
    title: string;
    author: ProfileInterface,
    remote: boolean;
    categories: CategoryInterface[];
    price?: number;
    description?: string;
}
