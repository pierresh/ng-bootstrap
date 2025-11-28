import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-datepicker-positiontarget',
    templateUrl: './datepicker-positiontarget.html',
    standalone: false
})
export class NgbdDatepickerPositiontarget {
  model: NgbDateStruct;
  placement = 'bottom';
}
