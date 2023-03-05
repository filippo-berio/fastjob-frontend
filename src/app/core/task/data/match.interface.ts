import { ProfileInterface } from '../../profile/core/data/profile.interface';
import { TaskInterface } from './task.interface';

export class MatchInterface {
    executor: ProfileInterface;
    task: TaskInterface;
}
