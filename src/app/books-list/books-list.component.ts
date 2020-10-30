import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {Router} from '@angular/router';
import {Book} from '../book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  booksList: Book[] = [];
  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
   this.getAll();
   console.log(this.booksList);
  }
  // @ts-ignore
  private getAll(): Book[]  {
    this.bookService.getBooksList().subscribe(data => {
      this.booksList = data;
    });
  }
}
