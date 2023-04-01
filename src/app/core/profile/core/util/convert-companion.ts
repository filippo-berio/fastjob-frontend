import { CompanionInterface } from '../../../chat/services/data/chat.data';
import { profilePhotoPlaceholder } from '../data/profile-photo-placeholder';
import { ProfileInterface } from '../data/profile.interface';
import { getProfileFullName } from './profile-representation';

export function convertToCompanion(profile: ProfileInterface): CompanionInterface {
    return {
        id: profile.id,
        name: getProfileFullName(profile),
        photoPath: profile.photos.find(ph => ph.main)?.path ?? profilePhotoPlaceholder
    };
}
