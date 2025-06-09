import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";

type Nivel = 'Primaria'|'Eso'|'Bach'|'CF'|'Otro';

@Component({
  selector: 'app-control-flow',
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styleUrls: ['./control-flow.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ControlFlowComponent {


  public showContent = signal( false );

  public nivel = signal<Nivel>('Eso');


  public frameworks = signal<string[]>(['Angular', 'SolidJs', 'Vue', 'React']);
  public frameworks2 = signal<string[]>([]);



  public changeContent() {
    this.showContent.update( ( value ) => !value )
  }



 }
