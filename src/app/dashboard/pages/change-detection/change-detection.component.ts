import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  imports: [],
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetectionComponent { }
