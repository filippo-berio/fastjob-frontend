import { ProfileInterface } from '../../profile/core/data/profile.interface';
import { TaskInterface } from '../../task/data/task.interface';

export interface NextExecutor {
    task: TaskInterface;
    profile: ProfileInterface;
}
