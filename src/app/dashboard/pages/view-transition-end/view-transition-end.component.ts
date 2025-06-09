import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-view-transition-end',
  imports: [ TitleComponent],
  templateUrl: './view-transition-end.component.html',
  styleUrls: ['./view-transition-end.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransitionEndComponent { }
