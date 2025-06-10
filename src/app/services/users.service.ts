import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '../interfaces/reqres.interface';
import { delay, map, Observable, Subscription, tap } from 'rxjs';

const baseUrl = 'https://reqres.in/api';

interface State {
  users: User[],
  loading: boolean,
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private http = inject( HttpClient );

  private state = signal<State>({
    users: [],
    loading: true,
  });

  public users = computed( () => {
    return this.state().users;
  });

  public isLoading = computed( () => this.state().loading );


  constructor() {

    this.loadData();
    console.log('Cargando datos')

  }


  public getUserById(id: number ): Observable<User>{

     const url = `${baseUrl}/users/${id}`;

     return this.http.get<UserResponse>( url,
      {  
        headers: {
                 'x-api-key': 'reqres-free-v1' 
                   }
      })
      .pipe(
        delay( 2000 ),
        tap( res => console.log('Estoy en el servicio: ', res)),
        map( res => res.data)
      )


  }


  private loadData(): void {

    // x-api-key: reqres-free-v1

    const url = `${baseUrl}/users`;

    this.http.get<UsersResponse>( url , {  headers: {
        'x-api-key': 'reqres-free-v1' }
      }).pipe(
        tap ( resp => {
          console.log('Mostrando data.')
        })
      ).subscribe( res => {

        this.state.set({
          loading: false,
          users: res.data,
        });
      }
    
    );



  }




}
