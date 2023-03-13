import { Pipe, PipeTransform } from '@angular/core';
import { TuiCurrencyPipe } from '@taiga-ui/addon-commerce';
import { TuiCurrencyVariants } from '@taiga-ui/addon-commerce/types/currency-variants';

@Pipe({
    name: 'taskPrice'
})
export class TaskPricePipe implements PipeTransform {
    transform(value: number | undefined, wallet: TuiCurrencyVariants = 'RUB'): any {
        const currencyPipe = new TuiCurrencyPipe();
        return value ? value + currencyPipe.transform(wallet) : 'По договоренности';
    }
}
