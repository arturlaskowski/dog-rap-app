import { Component, ViewEncapsulation } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'dog-rap';

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }
}
