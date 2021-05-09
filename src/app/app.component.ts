
import { Component, ViewEncapsulation } from '@angular/core';

import { DisplayGrid, CompactType, Draggable, GridsterConfig, GridsterItem, GridType, PushDirections, Resizable } from 'angular-gridster2';
import MyGrid from './my-grid';

interface Safe extends GridsterConfig {
  draggable: Draggable;
  resizable: Resizable;
  pushDirections: PushDirections;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // The image fit styles added on SCSS
  styleUrls: ['./app.component.scss'],
  // This is need for styling grid items
  encapsulation: ViewEncapsulation.None
})
export class AppComponent extends MyGrid {
  options: Safe;
  // This are the items inside the grid container
  dashboard: Array<GridsterItem>;

  // This are some custom items html. You can directly write the items html inside the items array like the image HTML
  table = `<table>
      <tr>
        <th>Product Name</th>
        <th>Unit Price</th>
        <th>Quanity</th>
        <th>Total</th>
      </tr>
      <tr>
        <td>iPhone 11</td>
        <td>$1200</td>
        <td>2</td>
        <td>$2400</td>
      </tr>
      <tr>
        <td>iPhone 11</td>
        <td>$1200</td>
        <td>2</td>
        <td>$2400</td>
      </tr>
      <tr>
        <td>iPhone 11</td>
        <td>$1200</td>
        <td>2</td>
        <td>$2400</td>
      </tr>
      <tr>
        <td>iPhone 11</td>
        <td>$1200</td>
        <td>2</td>
        <td>$2400</td>
      </tr>
      <tr>
        <td>iPhone 11</td>
        <td>$1200</td>
        <td>2</td>
        <td>$2400</td>
      </tr>
    </table>`
  card = `<div class="card">
  <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>John Doe</b></h4>
  </div>
    </div>`
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.setGridItems([
      { cols: 2, rows: 2, y: 0, x: 0, dragEnabled: true, resizeEnabled: true, innerContent: `<img src="https://picsum.photos/seed/picsum/536/354" />` },
      { cols: 2, rows: 2, y: 3, x: 2, dragEnabled: true, resizeEnabled: true, innerContent: `<img src="https://picsum.photos/seed/picsum/536/354" />` },
      { cols: 2, rows: 1, y: 4, x: 5, dragEnabled: true, resizeEnabled: true },
      { cols: 1, rows: 2, y: 0, x: 2, dragEnabled: true, resizeEnabled: true, innerContent: this.card },
      { cols: 1, rows: 1, y: 0, x: 4, dragEnabled: true, resizeEnabled: true },
      { cols: 1, rows: 1, y: 2, x: 5, dragEnabled: true, resizeEnabled: true },
      { cols: 1, rows: 1, y: 1, x: 0, dragEnabled: true, resizeEnabled: true },
      { cols: 1, rows: 1, y: 1, x: 0, dragEnabled: true, resizeEnabled: true },
      { cols: 2, rows: 2, y: 2, x: 0, dragEnabled: true, resizeEnabled: true, maxItemRows: 2, maxItemCols: 2, innerContent: this.table },
      { cols: 2, rows: 1, y: 2, x: 2, dragEnabled: true, resizeEnabled: true, innerContent: 'I am a text' },
      { cols: 1, rows: 1, y: 2, x: 4, dragEnabled: true, resizeEnabled: true, innerContent: '<h1>Grid is Awsome</h1>' },
      { cols: 1, rows: 1, y: 2, x: 6, dragEnabled: true, resizeEnabled: true }
    ])
  }
}
