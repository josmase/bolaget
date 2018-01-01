import {Component} from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {RouteAnimations} from './animations/route-animations';

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
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }
}
