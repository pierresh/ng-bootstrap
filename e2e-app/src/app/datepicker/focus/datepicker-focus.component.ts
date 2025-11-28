import {Component} from '@angular/core';

@Component({
    templateUrl: './datepicker-focus.component.html',
    standalone: false
})
export class DatepickerFocusComponent {
  model = null;
  startDate = null;
  disabled = false;
}
