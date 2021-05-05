
import { Component, ViewEncapsulation } from '@angular/core';

import { CompactType, DisplayGrid, Draggable, GridsterConfig, GridsterItem, GridType, PushDirections, Resizable } from 'angular-gridster2';

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
export class AppComponent {
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
  
  ngOnInit(): void {
    // Main Grid Configuration. You can remove any feature here
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      // This is the gap between grid items
      margin: 2,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 640,
      minCols: 1,
      maxCols: 100,
      minRows: 1,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      enableOccupiedCellDrop: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: true, east: true, south: true, west: true },
      pushResizeItems: false,
      // displayGrid: DisplayGrid.Always,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false
    };
    // Grid items definations
    this.dashboard = [
      { cols: 2, rows: 1, y: 0, x: 0 },
      { cols: 1, rows: 2, y: 0, x: 2, innerContent: this.card },
      { cols: 1, rows: 1, y: 0, x: 4 },
      { cols: 1, rows: 1, y: 2, x: 5 },
      { cols: 1, rows: 1, y: 1, x: 0 },
      { cols: 1, rows: 1, y: 1, x: 0 },
      { cols: 2, rows: 2, y: 3, x: 5, minItemRows: 2, minItemCols: 2, innerContent: `<img src="https://picsum.photos/seed/picsum/536/354" />` },
      { cols: 2, rows: 2, y: 2, x: 0, maxItemRows: 2, maxItemCols: 2, innerContent: this.table },
      { cols: 2, rows: 1, y: 2, x: 2, dragEnabled: true, resizeEnabled: true, innerContent: 'I am a text' },
      { cols: 1, rows: 1, y: 2, x: 4, dragEnabled: false, resizeEnabled: false, innerContent: '<h1>Grid is Awsome</h1>' },
      { cols: 1, rows: 1, y: 2, x: 6 }
    ];
  }
  // While Dragging any item
  changedOptions(): void {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }
}
