import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:8080/account_program';
  private url2 = 'http://localhost:8080/group-semester';
  account: any;

  constructor(private http: HttpClient, private router: Router) { }

  isLogged() {
    if(this.account == null)
      this.router.navigate(['']);
  }

  login(code: string, password: string) {
    return this.http.post(`${this.url}/login`, {code: code, password: password});
  }

  curriculum() {
    return this.http.get(`${this.url}/curriculum`, {params: {code: this.account.code}});
  }

  getStdScores(){
    return this.http.get(`${this.url2}/get-by-user-code`, {params: {code: this.account.code}});
  }
}
