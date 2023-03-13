import { Address } from '../../location/data/address.interface';
import { ProfileInterface } from '../../profile/core/data/profile.interface';
import { CategoryInterface } from '../../categories/data/category.interface';
import { MatchInterface } from './match.interface';
import { OfferInterface } from './offer.interface';

export type TaskStatus = 'wait' | 'offered' | 'work' | 'finished';

export interface TaskInterface {
    id: number,
    title: string;
    author: ProfileInterface,
    remote: boolean;
    categories: CategoryInterface[];
    price?: number;
    description?: string;
    executor?: ProfileInterface;
    matches?: MatchInterface[];
    offers?: OfferInterface[];
    status: TaskStatus;
    photos: string[];
    address?: Address;
}
