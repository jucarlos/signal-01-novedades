import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";

@Component({
  selector: 'app-view-transition-start',
  imports: [TitleComponent],
  templateUrl: './view-transition-start.component.html',
  styleUrls: ['./view-transition-start.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewTransitionStartComponent { }
