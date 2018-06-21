import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  private login_url = 'http://127.0.0.1:8000/sign_in'

  constructor(private http: HttpClient) { }

  public login(name , password) {
    this.http.post(this.login_url, '{name: name, password: password}')
      .subscribe(
        res => {
          alert(res);
        },
        err => {
          console.log('Error occured');
        }
      );
  }
}
