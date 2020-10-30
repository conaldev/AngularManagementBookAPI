import {Component, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../service/book.service';
import {ActivatedRoute} from '@angular/router';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {

  book: Book;

  constructor(private bookService: BookService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // @ts-ignore
    // tslint:disable-next-line:radix
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBookById(id).subscribe(data => {
      this.book = data;
    });
  }

  // tslint:disable-next-line:typedef
}
