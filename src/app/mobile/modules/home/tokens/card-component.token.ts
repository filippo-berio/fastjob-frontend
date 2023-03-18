import { InjectionToken, Type } from '@angular/core';
import { SettingsService } from '../../../../core/settings/service/settings.service';
import { ExecutorCardComponent } from '../components/author/executor-card/executor-card.component';
import { TaskCardComponent } from '../components/executor/task-card/task-card.component';

export type CardComponentFactoryType = () => Type<any>;

export const CardComponentToken = new InjectionToken<CardComponentFactoryType>('Swipeable card component');

export const cardComponentFactory = (settingsService: SettingsService) => {
    return () => {
        const mode = settingsService.currentMode;
        return mode === 'author' ? ExecutorCardComponent : TaskCardComponent;
    }
}
