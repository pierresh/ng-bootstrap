import {Component} from '@angular/core';

@Component({
    selector: 'ngbd-toast-prevent-autohide', templateUrl: './toast-prevent-autohide.html',
    standalone: false
})

export class NgbdToastPreventAutohide {
  show = false;
  autohide = true;
}
