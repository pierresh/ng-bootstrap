import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {routes} from './app.routing';
import {NavigationEnd} from '@angular/router';

@Component({
    selector: 'app-navigation',
    template: `
  <a role="button" class="btn btn-outline-primary ml-3" id="navigate-home" href="#/">Menu</a>
  <div [hidden]="isHidden">
    @for (route of routes; track route) {
      <div class="card m-1 d-inline-block" style="width: 290px;">
        <div class="card-header">{{route.path}}</div>
        <ul class="list-group list-group-flush">
          @for (childRoute of route.children; track childRoute) {
            <li class="list-group-item">
              <a href="#{{route.path}}/{{childRoute.path}}" id="navigate-{{route.path}}-{{childRoute.path}}"
              class="list-group-link">{{childRoute.path}}</a>
            </li>
          }
        </ul>
      </div>
    }
  </div>
  `,
    standalone: false
})

export class NavigationComponent {
  routes;
  isHidden = false;

  constructor(public router: Router) {
    this.routes = routes;

    router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.isHidden = evt.url !== '/';
      }
    });
  }
}
