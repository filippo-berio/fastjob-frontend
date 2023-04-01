import { ProfileReview } from '../../profile/core/data/profile-review.interface';
import { TaskInterface } from './task.interface';

export class ExecutorTaskList {
    work: TaskInterface[];
    offers: TaskInterface[];
    matches: TaskInterface[];
    swipes: TaskInterface[];
    finished: FinishedTask[];
}

export interface FinishedTask {
    data: TaskInterface;
    review?: ProfileReview;
}
