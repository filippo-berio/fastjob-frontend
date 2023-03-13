import { Directive, Input, OnInit } from '@angular/core';
import { MatchInterface } from '../../../../../../core/task/data/match.interface';
import { OfferInterface } from '../../../../../../core/task/data/offer.interface';
import { TaskInterface } from '../../../../../../core/task/data/task.interface';

@Directive()
export abstract class TaskExecutorsBaseComponent implements OnInit {
    @Input() task: TaskInterface;
    taskMatches: MatchInterface[] = [];
    taskOffers: OfferInterface[] = [];

    ngOnInit() {
        this.taskMatches = this.task.matches?.filter(m => !this.task.offers?.find(of => of.profile.id === m.executor.id)) ?? [];
        this.taskOffers = this.task.offers ?? [];
    }
}
