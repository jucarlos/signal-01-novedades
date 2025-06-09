import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuComponent } from "../shared/side-menu/side-menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [SideMenuComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent { }
