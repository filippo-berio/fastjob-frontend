import { TaskInterface } from '../../task/data/task.interface';
import { ProfileInterface } from '../../profile/core/data/profile.interface';

export interface Swipeable {
    task: TaskInterface;
    profile: ProfileInterface;
}
