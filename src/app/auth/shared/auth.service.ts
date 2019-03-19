import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { map } from "rxjs/operators";
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class AuthService{

  constructor(private http: HttpClient){}

  public register(userData: any): Observable<any>{
    return this.http.post('api/v1/users/register', userData);
  }

  public login(userData: any): Observable<any>{
    return this.http.post('api/v1/users/auth', userData).pipe(map(
      (token: any) => {
        
        return this.saveToken(token);
      }
    ));
  }

  private saveToken(token: string): string{
    localStorage.setItem('book_auth', token);

    return token;
  }


}