import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoaderFastComponent } from '@shared/heavy-loader-fast/heavy-loader-fast.component';

@Component({
  selector: 'app-defer-options',
  imports: [ HeavyLoaderFastComponent ],
  templateUrl: './defer-options.component.html',
  styleUrls: ['./defer-options.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferOptionsComponent { }
