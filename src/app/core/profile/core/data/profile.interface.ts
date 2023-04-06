import { CategoryInterface } from '../../../categories/data/category.interface';
import { CityInterface } from '../../../location/data/city.interface';
import { ProfilePhoto } from './profile-photo.interface';
import { ProfileReview } from './profile-review.interface';

export interface ProfileInterface {
    id: number;
    firstName: string;
    birthDate: string;
    categories: CategoryInterface[];
    lastName?: string;
    description?: string;
    photos: ProfilePhoto[];
    city?: CityInterface;
    reviews: ProfileReview[];
}
