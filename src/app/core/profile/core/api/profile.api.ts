import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { SuccessResponseInterface } from '../../../shared/data/interfaces/success-response.interface';
import { ProfileInterface } from '../data/profile.interface';

export interface GetProfileResponse extends SuccessResponseInterface {
    data?: ProfileInterface;
}

@Injectable({
    providedIn: 'root'
})
export class ProfileApi {
    private backendUrl = environment.backendUrl;

    constructor(
        private http: HttpClient,
    ) {
    }

    getProfile(): Observable<GetProfileResponse> {
        return this.http.get<GetProfileResponse>(this.backendUrl + '/api/profile')
    }

    register(firstName: string, birthDate: string): Observable<SuccessResponseInterface> {
        return this.http.post<SuccessResponseInterface>(this.backendUrl + '/api/profile/register', {
            firstName,
            birthDate
        })
    }
}
