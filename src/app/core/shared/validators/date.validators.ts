import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import * as moment from 'moment';

export class DateValidators {
    static date(control: AbstractControl): ValidationErrors | null {
        return () => {
            return moment(control.value).isValid() ? null : {
                'date': 'invalid format'
            };
        };
    }

    static yearsPassed(years: number): ValidatorFn {
        return (control: AbstractControl) => {
            const input = moment(control.value);
            const edge = moment().subtract(years, 'years');
            return input.isBefore(edge) ? null : {
                date: 'way 2 fresh'
            };
        }
    }
}
