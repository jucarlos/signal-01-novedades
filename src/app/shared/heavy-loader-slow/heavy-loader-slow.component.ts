import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'heavy-loader-slow',
  imports: [ CommonModule ],
  templateUrl: './heavy-loader-slow.component.html',
  styleUrls: ['./heavy-loader-slow.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeavyLoaderSlowComponent { 


  cssClass = input.required<string>();


  constructor() {

    console.log('Código bloqueante');

    const start = Date.now();
    while( Date.now() - start < 5000 ) {}

    console.log('Código bloqueante terminado');

    
  }



}
