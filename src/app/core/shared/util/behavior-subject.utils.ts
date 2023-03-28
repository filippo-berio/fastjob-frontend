import { Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export function createNullBehaviorSubject<T>(): BehaviorSubject<T | null> {
    return new BehaviorSubject<T|null>(null);
}
