import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  newBookForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private bookService: BookService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.newBookForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }
  onSubmit() {
    let data = this.newBookForm.value;
    console.log(data);
    this.bookService.createBook(data).subscribe(e => {
    });
    this.route.navigate(['books']);
  }
}
