import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

    update(profile: ProfileInterface): Observable<SuccessResponseInterface> {
        return this.http.put<SuccessResponseInterface>(this.backendUrl + '/api/profile/update', {
            description: profile.description,
            lastName: profile.lastName,
            categoryIds: profile.categories.map(c => c.id),
            cityId: profile.city?.id,
            firstName: profile.firstName,
        })
    }
}
