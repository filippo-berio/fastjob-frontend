import {
    Component,
    ContentChild,
    EventEmitter,
    Input,
    Output,
    TemplateRef
} from '@angular/core';
import { SelectItemInterface } from '../../data/select-item.interface';

@Component({
    selector: 'fj-select-typeahead',
    templateUrl: './select-typeahead.component.html',
    styleUrls: ['./select-typeahead.component.scss'],
})
export class SelectTypeaheadComponent<I, V>  {
    @ContentChild(TemplateRef) templateRef: TemplateRef<any>;

    @Input() items: SelectItemInterface<I, V>[] = [];

    @Output() onSelect = new EventEmitter<I>();

    searchInput = '';

    filterItems(item: SelectItemInterface<I, V>, search: string): boolean {
        return item.title.replace(' ', '')
            .toLowerCase()
            .startsWith(search.toLowerCase());
    }

    select(item: SelectItemInterface<I, V>) {
        this.onSelect.emit(item.item);
    }
}
