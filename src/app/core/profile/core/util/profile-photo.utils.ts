import { ProfilePhoto } from '../data/profile-photo.interface';
import { ProfileInterface } from '../data/profile.interface';

export function getProfileMainPhoto(profile: ProfileInterface): ProfilePhoto | undefined {
    return profile.photos.find(ph => ph.main);
}

export function getProfileMainPhotoPath(profile: ProfileInterface): string | undefined {
    return getProfileMainPhoto(profile)?.path;
}

export function getProfileInitials(profile: ProfileInterface): string {
    return profile.firstName.substring(0, 1)
        + (profile.lastName ? profile.lastName.substring(0, 1) : '');
}
