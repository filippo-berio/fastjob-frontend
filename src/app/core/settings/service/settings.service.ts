import { AppMode } from "../data/app-mode.type";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {
    private localStorage = localStorage;

    currentMode(): AppMode {
        return (this.localStorage.getItem('mode') ?? 'executor') as AppMode;
    }
}
