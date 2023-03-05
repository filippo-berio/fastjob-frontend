import { TaskInterface } from './task.interface';
import { ProfileInterface } from '../../profile/core/data/profile.interface';

export interface OfferInterface {
    task: TaskInterface;
    profile: ProfileInterface;
}
