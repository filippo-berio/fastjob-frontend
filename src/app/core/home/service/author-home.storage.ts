import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthorHomeStorage {
    private storage = localStorage;

    set taskId(value: number | null) {
        if (value) {
            this.storage.setItem('fj.author.home.taskId', value.toString());
        }
    }

    get taskId(): number | null {
        const taskId = this.storage.getItem('fj.author.home.taskId');
        return taskId ? parseInt(taskId, 10) : null;
    }
}
