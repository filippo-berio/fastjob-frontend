import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { SuccessResponseInterface } from '../../../shared/data/interfaces/success-response.interface';
import { TokenPair } from '../data/token-pair.interface';

export interface ConfirmCodeResponse {
    success: boolean;
    retries?: number;
    tokens?: TokenPair;
}

@Injectable({
    providedIn: 'root'
})
export class AuthApi {
    private backendHost = environment.backendUrl;

    constructor(
        private http: HttpClient,
    ) {
    }

    sendConfirmationCode(phone: string): Observable<SuccessResponseInterface> {
        return this.http.post<SuccessResponseInterface>(this.backendHost + '/auth-api/send-code', {
            phone
        });
    }

    confirmCode(phone: string, code: string): Observable<ConfirmCodeResponse> {
        return this.http.post<ConfirmCodeResponse>(this.backendHost + '/auth-api/confirm-code', {
            phone,
            code,
        });
    }

    refreshToken(): Observable<TokenPair> {
        return this.http.post<TokenPair>(this.backendHost + '/auth-api/refresh', {});
    }
}
