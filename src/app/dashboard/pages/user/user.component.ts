import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

import { UsersService } from '../../../services/users.service';
import { switchMap } from 'rxjs';
import { User } from '../../../interfaces/reqres.interface';

@Component({
  selector: 'app-user',
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent {

  private route = inject ( ActivatedRoute );
  private userService = inject( UsersService );
  // public userPro: User | null = null;


 // cambiar un observable  a una señal
 //public userSignal = signal<User | null>(null);
 
 public user = toSignal( 
    this.route.params.pipe(
      switchMap( ({id}) => this.userService.getUserById(id))
    ))
  

  
// ngOnInit(): void {

//   this.route.params.pipe(
//       switchMap( ({id}) => this.userService.getUserById(id))
//     ).subscribe( resp => {

//       this.userPro = resp;
//       this.userSignal.set( resp )

//     })

// }
    // ortra forma
    
  //   this.route.params.subscribe( ({ id }) => {
  //     console.log( id );
  //     this.userService.getUserById( id ).subscribe ( resp => {
  //        this.user = resp;
  //       console.log( resp )
  //     })

    
  //   }) 
  //  } 




}
