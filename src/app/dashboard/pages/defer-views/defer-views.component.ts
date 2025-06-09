import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoaderSlowComponent } from '@shared/heavy-loader-slow/heavy-loader-slow.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-views',
  imports: [TitleComponent, HeavyLoaderSlowComponent],
  templateUrl: './defer-views.component.html',
  styleUrls: ['./defer-views.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferViewsComponent { }
