import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/beyond-a-better-box', icon: 'home' },
    { title: 'Products', url: '/product-overview', icon: 'bulb' }
  ];
  public labels = [];
  constructor() {}
}
