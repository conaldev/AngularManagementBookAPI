import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string;
  constructor() { }
  // tslint:disable-next-line:typedef
  setMessage(value) {
    this.message = value;
  }
  // tslint:disable-next-line:typedef
  getMessage() {
    return this.message;
  }
}
