import { CategoryInterface } from '../../../categories/data/category.interface';

export interface ProfileInterface {
    id: number;
    firstName: string;
    birthDate: string;
    categories: CategoryInterface[];
    lastName?: string;
    description?: string;
    photoPath?: string;
    city?: any;
}
