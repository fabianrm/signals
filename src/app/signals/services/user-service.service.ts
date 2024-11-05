import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private _http = inject(HttpClient);
  private _baseUrl = 'https://reqres.in/api/users';

  getUserById(id: number): Observable<User> {
    return this._http.get<SingleUserResponse>(`${this._baseUrl}/${id}`)
      .pipe(
        map(response => response.data),
        tap(console.log)
      )

  }

}
