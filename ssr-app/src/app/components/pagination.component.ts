import { Component } from '@angular/core';

@Component({
    selector: 'pagination-component',
    template: `
    <ngb-pagination [collectionSize]="70" [(page)]="page" [boundaryLinks]="true"></ngb-pagination>
  `,
    standalone: false
})
export class PaginationComponent {
  page = 4;
}
