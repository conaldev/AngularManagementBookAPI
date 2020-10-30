import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  // tslint:disable-next-line:typedef
  getUserLogin() {
    return JSON.parse(localStorage.getItem('userLogin'));
  }
  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('userLogin');
  }
}
