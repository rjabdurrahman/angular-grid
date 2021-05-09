import { DisplayGrid, CompactType, Draggable, GridsterConfig, GridsterItem, GridType, PushDirections, Resizable } from 'angular-gridster2';
import data from './grid-data.json';
interface Safe extends GridsterConfig {
    draggable: Draggable;
    resizable: Resizable;
    pushDirections: PushDirections;
}
class MyGrid {
    // This are the items inside the grid container
    public options: Safe;
    // This is for Grid Items
    public dashboard: Array<GridsterItem>;

    constructor() {
        this.options = {
            gridType: GridType.Fit,
            compactType: CompactType.None,
            /* Show Grid using gap between items */
            margin: 0,
            outerMargin: false,
            outerMarginTop: null,
            outerMarginRight: null,
            outerMarginBottom: null,
            outerMarginLeft: null,
            useTransformPositioning: false,
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
            // To Enable Dragging
            draggable: {
                enabled: false,
            },
            // To Enable Resizing
            resizable: {
                enabled: true,
            },
            swap: false,
            pushItems: true,
            disablePushOnDrag: false,
            disablePushOnResize: false,
            pushDirections: { north: true, east: true, south: true, west: true },
            pushResizeItems: false,
            /* Disable Main Grid View */
            // displayGrid: DisplayGrid.Always,
            disableWindowResize: false,
            disableWarnings: false,
            scrollToNewItems: false
        };
    }

    // This are some custom items html. You can directly write the items html inside the items array like the image HTML
    
    showGrid() {
        // Grid items definations
        data[3].innerContent = `<div class="card">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:100%">
            <div class="container">
            <h4><b>John Doe</b></h4>
            </div>
            </div>`
        data[8].innerContent = `<table>
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
        this.dashboard = data;
    }

    // While Dragging any item
    changedOptions(): void {
        if (this.options.api && this.options.api.optionsChanged) {
            this.options.api.optionsChanged();
        }
    }
}

export default MyGrid;