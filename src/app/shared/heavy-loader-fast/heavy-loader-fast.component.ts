import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'heavy-loader-fast',
  imports: [ CommonModule],
  templateUrl: './heavy-loader-fast.component.html',
  styleUrls: ['./heavy-loader-fast.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoaderFastComponent {

  @Input({ required: true }) cssClass!: string;

  constructor() {
    console.log('HeavyLoader Fast creado');
  }


}
