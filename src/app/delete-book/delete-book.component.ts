import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../service/book.service';
import {Book} from '../book';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  deleteBookForm: FormGroup;


  constructor(private router: ActivatedRoute, private bookService: BookService, private formBuilder: FormBuilder, private route: Router) {
  }

  currentBook: Book;

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    const id = Number.parseInt(this.router.snapshot.paramMap.get('id'));
    this.bookService.getBookById(id).subscribe(data => {
      this.currentBook = data;
    });
    this.deleteBookForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  onSubmit() {
    // @ts-ignore
    console.log(this.currentBook);
    if (confirm('Are you sure?')) {
      this.bookService.deleteBook(this.currentBook.id).subscribe(e => {
        console.log(e);
      });
    }
    this.route.navigate(['books']);
  }

}
