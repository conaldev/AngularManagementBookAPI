import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../service/book.service';
import {Book} from '../book';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  updateBookForm: FormGroup;


  constructor(private router: ActivatedRoute, private bookService: BookService, private formBuilder: FormBuilder, private route: Router) {
  }

  currentBook: Book;
  ngOnInit(): void {
    // tslint:disable-next-line:radix
    const id = Number.parseInt(this.router.snapshot.paramMap.get('id'));
    this.bookService.getBookById(id).subscribe(data => {
      this.currentBook = data;
    });
    this.updateBookForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  onSubmit() {
    // @ts-ignore
    console.log(this.currentBook);
    this.bookService.updateBook( this.currentBook.id, this.currentBook).subscribe(e => {
      console.log(e);
    });
    this.route.navigate(['books']);
  }
}
