
import { Component, ViewEncapsulation } from '@angular/core';
import MyGrid from './my-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // The image fit styles added on SCSS
  styleUrls: ['./app.component.scss'],
  // This is need for styling grid items
  encapsulation: ViewEncapsulation.None
})
export class AppComponent extends MyGrid {
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setGridItems()
  }
}
