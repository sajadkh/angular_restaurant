import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {isBoolean} from 'util';

@Injectable()
export class AuthService {

  private login_url = 'http://127.0.0.1:8000/api/sign_in'

  constructor(private http: HttpClient) { }

  public login(name , password) {
    this.http.post(this.login_url, {name: name , password: password })
      .subscribe(
        res => {
          if (res['result'] === 'true') {
            alert(1);
          }
        },
        err => {
          console.log(err);
        }
      );
  }
}
