import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-datepicker-popup',
    templateUrl: './datepicker-popup.html',
    standalone: false
})
export class NgbdDatepickerPopup {
  model: NgbDateStruct;
}
