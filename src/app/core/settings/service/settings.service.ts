import { AppMode } from "../data/app-mode.type";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    private localStorage = localStorage;

    get currentMode(): AppMode {
        return (this.localStorage.getItem('fastjob-mode') ?? 'executor') as AppMode;
    }

    set currentMode(value: AppMode) {
        this.localStorage.setItem('fastjob-mode', value);
    }
}
