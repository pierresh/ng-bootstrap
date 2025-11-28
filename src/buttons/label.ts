import {Directive} from '@angular/core';

@Directive({
    selector: '[ngbButtonLabel]',
    host: { '[class.btn]': 'true', '[class.active]': 'active', '[class.disabled]': 'disabled', '[class.focus]': 'focused' },
    standalone: false
})
export class NgbButtonLabel {
  active: boolean;
  disabled: boolean;
  focused: boolean;
}
