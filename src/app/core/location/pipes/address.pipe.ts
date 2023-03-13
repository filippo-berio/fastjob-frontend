import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../data/address.interface';

@Pipe({
    name: 'address'
})
export class AddressPipe implements PipeTransform {
    transform(value?: Address): any {
        return value ? `${value.city.title}, ${value.title}` : null;
    }

}
