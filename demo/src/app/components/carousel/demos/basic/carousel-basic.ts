import { Component } from '@angular/core';

@Component({
    selector: 'ngbd-carousel-basic', templateUrl: './carousel-basic.html',
    standalone: false
})
export class NgbdCarouselBasic {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
