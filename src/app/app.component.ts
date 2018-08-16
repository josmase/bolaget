import {Component} from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {RouteAnimations} from './animations/route-animations';
import {NavigationEnd, Router} from '@angular/router';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        useAnimation(RouteAnimations)
      ])
    ])
  ]
})
export class AppComponent {
  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && environment.production) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
        // console.log('Sending view');
      }
    });
  }

  static getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }
}
