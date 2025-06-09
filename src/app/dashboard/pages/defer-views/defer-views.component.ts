import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-defer-views',
  imports: [],
  templateUrl: './defer-views.component.html',
  styleUrls: ['./defer-views.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferViewsComponent { }
