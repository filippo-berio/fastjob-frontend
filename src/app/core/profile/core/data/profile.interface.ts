import { CategoryInterface } from '../../../categories/data/category.interface';
import { CityInterface } from '../../../location/data/city.interface';

export interface ProfileInterface {
    id: number;
    firstName: string;
    birthDate: string;
    categories: CategoryInterface[];
    lastName?: string;
    description?: string;
    photoPath?: string;
    city?: CityInterface;
}
