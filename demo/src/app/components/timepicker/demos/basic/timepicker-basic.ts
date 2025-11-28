import {Component} from '@angular/core';

@Component({
    selector: 'ngbd-timepicker-basic',
    templateUrl: './timepicker-basic.html',
    standalone: false
})
export class NgbdTimepickerBasic {
  time = {hour: 13, minute: 30};
}
