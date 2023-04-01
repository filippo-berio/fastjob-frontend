import { ProfileInterface } from './profile.interface';

export interface NewProfileReview {
    rating: number;
    comment?: string;
}

export interface ProfileReview extends NewProfileReview {
    author: ProfileInterface;
    target: ProfileInterface;
}
