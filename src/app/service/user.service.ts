import { Injectable } from '@angular/core';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      name: 'Minh',
      email: 'minh@gmail.com',
      password: '123456'
    },
    {
      id: 2,
      name: 'Admin',
      email: 'admin@gmail.com',
      password: 'admin'
    }
  ];

  constructor() { }
  // tslint:disable-next-line:typedef
  findUserByEmailAndPassword(data) {
    for (let user of this.users){
      // tslint:disable-next-line:triple-equals
      if (data.email == user.email && data.password == user.password){
        return user;
      }
    }
    return -1;
  }
}
