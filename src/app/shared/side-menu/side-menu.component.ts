import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'side-menu',
  imports: [ RouterLink, RouterLinkActive ],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent { 



  public menuItems = routes
      .map ( route => route.children ?? [])
      .flat() // aplana / concatena los arrais.
      .filter( route => route && route.path)
      .filter( route => !route.path?.includes(':'))
    ;



  constructor() {



    // const menuItems = routes
    //   .map ( route => route.children ?? [])
    //   .flat()
    //   .filter( route => route && route.path)
    //   .filter( route => !route.path?.includes(':'))
    // ;

    // console.log( menuItems );


  }



}
