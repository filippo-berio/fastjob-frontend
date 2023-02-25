import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CityInterface } from '../data/city.interface';

@Injectable({
    providedIn: 'root'
})
export class LocationApi {
    private backend = environment.backendUrl;

    constructor(
        private http: HttpClient
    ) {
    }

    cityList(): Observable<CityInterface[]> {
        return this.http.get<CityInterface[]>(this.backend + '/api/location/city');
    }
}
