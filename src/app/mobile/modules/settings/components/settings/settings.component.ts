import { Component } from '@angular/core';
import { AppMode } from '../../../../../core/settings/data/app-mode.type';
import { SettingsService } from '../../../../../core/settings/service/settings.service';

@Component({
    selector: 'fj-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {

    constructor(
        private settings: SettingsService,
    ) {
    }

    getCurrentMode(): AppMode {
        return this.settings.currentMode;
    }

    changeCurrentMode() {
        this.settings.currentMode = this.settings.currentMode === 'author' ? 'executor': 'author';
    }
}
