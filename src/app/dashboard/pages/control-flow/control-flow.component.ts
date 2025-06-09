import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";

@Component({
  selector: 'app-control-flow',
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent {


  public showContent = signal( false );

  public changeContent() {
    this.showContent.update( ( value ) => !value )
  }



 }
