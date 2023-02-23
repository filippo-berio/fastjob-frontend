import { EventEmitter } from '@angular/core';

export abstract class ConfirmationStepBaseComponent {
    stepDone = new EventEmitter<string>();
}
