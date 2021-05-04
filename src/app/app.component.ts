import { Component } from '@angular/core';
import gridItems from './grid-data.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public gridItems = gridItems;

  areaUpdater(val) {
    return val;
  }
}
