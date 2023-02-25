import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ObservableCache } from '../../shared/decorators/observable-cache';
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

    @ObservableCache
    cityList(): Observable<CityInterface[]> {
        return this.http.get<CityInterface[]>(this.backend + '/api/location/city');
    }
}
