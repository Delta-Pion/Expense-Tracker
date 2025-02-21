import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { AccessObject } from '../_models/access-object';
import { catchError, map, Observable, switchMap, throwError } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { RefreshTokenObject } from '../_models/refresh-token-object';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = "https://localhost:5000/";

  http = inject(HttpClient);
  router = inject(Router);

  accessObject = signal<AccessObject | null> (null);
  user = signal<User | null>(null);
  refreshTokenObject : RefreshTokenObject  = {
    refreshToken : undefined
  }


  login(model : any) {
    return this.http.post<AccessObject>(this.baseUrl + "login" , model).pipe(
      map (a => {
        if(a) {
          localStorage.setItem("AccessObject" , JSON.stringify(a));
          this.accessObject.set(a);
          //console.log(a);
        }
        return a
      })
    )
  }

  getRefreshToken() {
    this.refreshTokenObject.refreshToken = this.accessObject()?.refreshToken
    return this.http.post<AccessObject>(`${this.baseUrl}refresh`, this.refreshTokenObject).pipe(
      map(a => {
        localStorage.setItem("AccessObject" , JSON.stringify(a));
        this.accessObject.set(a);
      }),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }

  getUser() : Observable<User> {
    return this.http.get<User>(this.baseUrl + "api/" + "User/" + "current").pipe(
      map(user => {
        this.user.set(user);
        return user;
      }),
      catchError((error : HttpErrorResponse) => {
        if(error.status == 401) {
          return this.getRefreshToken().pipe(
            switchMap(() => this.getUser()),
            catchError((error : HttpErrorResponse) => {
              this.logout();
              return throwError(() => new Error(`Session expired. Logging out. ${error.message}`));
            })
          );
        }
        return throwError(() => error)
      })
    );
  }

  logout()
  {
    localStorage.removeItem("AccessObject");
    this.accessObject.set(null);
    this.router.navigate(['']);
  }
}
