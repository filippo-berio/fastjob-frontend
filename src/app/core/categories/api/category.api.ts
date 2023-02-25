import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CategoryInterface } from '../data/category.interface';

@Injectable({
    providedIn: 'root'
})
export class CategoryApi {
    private backend = environment.backendUrl;

    constructor(
        private http: HttpClient,
    ) {
    }

    getTree(): Observable<CategoryInterface[]> {
        return this.http.get<CategoryInterface[]>(this.backend + '/api/category/tree');
    }
}
