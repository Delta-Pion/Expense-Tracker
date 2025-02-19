import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, Signal } from '@angular/core';
import { AccessObject } from '../_models/access-object';
import { map } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = "https://localhost:5000/";

  http = inject(HttpClient);

  accessObject = signal<AccessObject | null> (null);

  login(model : any) {
    return this.http.post<AccessObject>(this.baseUrl + "login" , model).pipe(
      map (a => {
        if(a) {
          localStorage.setItem("AccessObject" , JSON.stringify(a));
          this.accessObject.set(a);
          console.log(a);
        }
        return a
      })
    )
  }

  getUser() {
    let accessObjectString = localStorage.getItem("AccessObject")
    if(accessObjectString){
      this.accessObject.set(JSON.parse(accessObjectString));
      console.log(this.accessObject())
    }
    return this.http.get<User>(this.baseUrl + "api/" + "User/" + "current")
  }
}
