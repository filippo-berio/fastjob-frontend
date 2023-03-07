import { profilePhotoPlaceholder } from '../data/profile-photo-placeholder';
import { ProfilePhoto } from '../data/profile-photo.interface';
import { ProfileInterface } from '../data/profile.interface';

export function getProfileMainPhoto(profile: ProfileInterface): ProfilePhoto | null {
    return profile.photos.find(ph => ph.main) ?? null;
}

export function getProfileMainPhotoPath(profile: ProfileInterface): string {
    return getProfileMainPhoto(profile)?.path ?? profilePhotoPlaceholder;
}
