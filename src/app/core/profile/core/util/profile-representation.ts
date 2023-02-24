import * as moment from 'moment/moment';
import { ProfileInterface } from '../data/profile.interface';

export function getProfileFullRepresentation(profile: ProfileInterface) {
    return `${getProfileFullName(profile)}, ${getProfileAge(profile)}`;
}

export function getProfileRepresentation(profile: ProfileInterface) {
    return `${profile.firstName}, ${getProfileAge(profile)}`;
}

export function getProfileAge(profile: ProfileInterface): number {
    return moment().diff(profile.birthDate, 'y');
}

export function getProfileFullName(profile: ProfileInterface): string {
    return profile.lastName ?
        `${profile.firstName} ${profile.lastName}` :
        profile.firstName;
}
