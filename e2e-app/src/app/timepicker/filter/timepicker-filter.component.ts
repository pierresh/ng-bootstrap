import {Component} from '@angular/core';

@Component({
    templateUrl: './timepicker-filter.component.html',
    standalone: false
})
export class TimepickerFilterComponent {
  time = {hour: null, minute: null, second: null};
}
