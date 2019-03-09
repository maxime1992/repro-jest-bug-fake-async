import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'repro-jest-bug-fake-async';

  constructor() {
    setTimeout(() => {
      this.title = 'new title!';
    }, 10 * 1000);
  }
}
