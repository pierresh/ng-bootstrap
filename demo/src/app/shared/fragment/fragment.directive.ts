import { Directive, Input } from '@angular/core';

@Directive({
    selector: 'a[ngbdFragment]',
    host: {
        '[class.title-fragment]': 'true',
        '[attr.id]': 'fragment'
    },
    standalone: false
})
export class NgbdFragment {
  @Input() fragment: string;
}
