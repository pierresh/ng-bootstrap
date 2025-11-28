import { Component } from '@angular/core';

@Component({
    selector: 'progress-component',
    template: `
    <ngb-progressbar [showValue]="true" type="success" [value]="50"></ngb-progressbar>
  `,
    standalone: false
})
export class ProgressComponent {
}
