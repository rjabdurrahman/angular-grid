import { Component } from '@angular/core';
import colorsData from './colors-data.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grid-project';
  colors = colorsData;

  areaUpdater(val) {
    return val;
  }
}
