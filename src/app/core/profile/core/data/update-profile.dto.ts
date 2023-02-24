import { CategoryInterface } from '../../../categories/data/category.interface';

export interface UpdateProfileDtoInterface {
    firstName?: string;
    categories?: CategoryInterface[];
    lastName?: string;
    description?: string;
    // TODO
    city?: any;
}
