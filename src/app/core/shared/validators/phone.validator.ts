import { FormControl, ValidationErrors } from '@angular/forms';

export class PhoneValidator {
    static validPhone(c: FormControl): ValidationErrors | null {
        const invalid = {phone : 'Укажите номер телефона'};
        const setValue = c.value ? c.value.replace(/\D/g, '') : null;
        if (c.value === '+') {
            return invalid;
        }
        if ((setValue?.length > 0) && (setValue?.length < 11)) {
            return invalid;
        } else {
            return null;
        }
    }

}
