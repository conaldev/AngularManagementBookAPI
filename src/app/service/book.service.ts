import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from '../book';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getBooksList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${environment.urlApi}`);
  }
  createBook(book: Book): Observable<Book> {
    // @ts-ignore
    return this.httpClient.post(`${environment.urlApi}`, book);
  }
  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${environment.urlApi}/${id}`);
  }
  // tslint:disable-next-line:ban-types
  updateBook(id: number, book: Book): Observable<Object> {
    // @ts-ignore
    return this.httpClient.put(`${environment.urlApi}/${id}`, book);
  }
  deleteBook(id: number): Observable<Book> {
    // @ts-ignore
    return this.httpClient.delete(`${environment.urlApi}/${id}`);
  }
}
