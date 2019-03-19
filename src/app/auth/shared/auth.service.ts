import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { map } from "rxjs/operators";
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';

const jwt = new JwtHelperService();
class DecodedToken{
  exp: number = 0;
  username: string = '';
}

@Injectable()
export class AuthService{

  private decodedToken;

  constructor(private http: HttpClient){
    this.decodedToken = JSON.parse( localStorage.getItem('book_meta')) || new DecodedToken();
  }

  public register(userData: any): Observable<any>{
    return this.http.post('api/v1/users/register', userData);
  }

  private saveToken(token: string): string{
    debugger;
    this.decodedToken = jwt.decodeToken(token);
    
    localStorage.setItem('book_auth', token);

    localStorage.setItem('book_meta', JSON.stringify( this.decodedToken));

    return token;
  }

  private getExpiration(){
    return moment.unix(this.decodedToken.exp);
  }

  public login(userData: any): Observable<any>{
    return this.http.post('api/v1/users/auth', userData).pipe(map(
      (token: any) => {
        
        return this.saveToken(token);
      }
    ));
  }

  public isAuthenticated(): boolean{
    return moment().isBefore(this.getExpiration());
  }

  public logout(){
    localStorage.removeItem('book_auth');
    localStorage.removeItem('book_meta');

    this.decodedToken = new DecodedToken();
  }

  public getUsername() : string{
    return this.decodedToken.username;
  }

  public getAuthToken(): string{
    return localStorage.getItem('book_auth');
  }
  


}