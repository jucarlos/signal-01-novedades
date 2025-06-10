import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { TitleComponent } from "../../../shared/title/title.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [TitleComponent, RouterLink],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsersComponent {



  public userService = inject( UsersService );


  
  // ngOnInit(): void {
  //   this.userService.loadData().subscribe( resp => {
  //     console.log( resp );
  //   })
  // }







 }
