import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    templateUrl: './popover-autoclose.component.html', changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class PopoverAutocloseComponent {
  autoClose: boolean | 'inside' | 'outside' = true;
}
