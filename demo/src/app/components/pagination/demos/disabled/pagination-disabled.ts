import {Component} from '@angular/core';

@Component({
    selector: 'ngbd-pagination-disabled',
    templateUrl: './pagination-disabled.html',
    standalone: false
})
export class NgbdPaginationDisabled {
  page = 3;
  isDisabled = true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
}
