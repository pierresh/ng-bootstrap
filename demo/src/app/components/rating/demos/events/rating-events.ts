import {Component} from '@angular/core';

@Component({
    selector: 'ngbd-rating-events',
    templateUrl: './rating-events.html',
    standalone: false
})
export class NgbdRatingEvents {
  selected = 0;
  hovered = 0;
  readonly = false;
}
