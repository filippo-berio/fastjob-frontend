import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'missing'
})
export class MissingPipe implements PipeTransform {
    transform(value: any, missingText = 'Отсутствует'): any {
        return value ?? missingText;
    }
}
