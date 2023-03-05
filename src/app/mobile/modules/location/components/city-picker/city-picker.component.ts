import { Component, EventEmitter, OnInit } from '@angular/core';
import { SelectItemInterface } from 'src/app/lib/ui/data/select-item.interface';
import { CityInterface } from '../../../../../core/location/data/city.interface';
import { LocationApi } from '../../../../../core/location/service/location.api';

@Component({
    selector: 'fj-city-picker',
    templateUrl: './city-picker.component.html',
    styleUrls: ['./city-picker.component.scss'],
})
export class CityPickerComponent implements OnInit {

    cities: CityInterface[];
    cityItems: SelectItemInterface<CityInterface, number>[];

    onSelect = new EventEmitter<CityInterface>();

    constructor(
        private api: LocationApi,
    ) {
    }

    ngOnInit() {
        this.api.cityList().subscribe(list => {
            this.cities = list;
            this.cityItems = list.map(city => {
                return {
                    value: city.id,
                    title: city.title,
                    item: city,
                } as SelectItemInterface<CityInterface, number>;
            })
        });
    }

    select(city: CityInterface) {
        this.onSelect.emit(city);
    }
}
