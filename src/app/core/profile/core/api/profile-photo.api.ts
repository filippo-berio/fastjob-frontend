import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { SuccessResponseInterface } from '../../../shared/data/success-response.interface';
import { ProfilePhoto } from '../data/profile-photo.interface';

@Injectable({
    providedIn: 'root'
})
export class ProfilePhotoApi {
    private backend = environment.backendUrl;

    constructor(
        private http: HttpClient,
    ) {
    }

    uploadProfilePhoto(file: File): Observable<SuccessResponseInterface> {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post<SuccessResponseInterface>(this.backend + '/api/profile/photo/upload', formData);
    }

    makeMain(photo: ProfilePhoto): Observable<ProfilePhoto[]> {
        return this.http.post<ProfilePhoto[]>(this.backend + '/api/profile/photo/' + photo.id + '/make-main', {});
    }

    delete(photo: ProfilePhoto): Observable<ProfilePhoto[]> {
        return this.http.delete<ProfilePhoto[]>(this.backend + '/api/profile/photo/' + photo.id + '/delete', {});
    }
}
