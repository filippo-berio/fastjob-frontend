import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CredentialsStore {
    private localStorage = localStorage;

    setCredentials(accessToken: string, refreshToken: string) {
        this.localStorage.setItem('fastjob-access-token', accessToken);
        this.localStorage.setItem('fastjob-refresh-token', refreshToken);
    }

    hasCredentials() {
        return !!this.accessToken()
            && !!this.refreshToken();
    }

    accessToken(): string|null {
        return this.localStorage.getItem('fastjob-access-token');
    }

    refreshToken(): string|null {
        return this.localStorage.getItem('fastjob-refresh-token');
    }

    clear() {
        this.localStorage.removeItem('fastjob-access-token');
        this.localStorage.removeItem('fastjob-refresh-token');
    }
}
