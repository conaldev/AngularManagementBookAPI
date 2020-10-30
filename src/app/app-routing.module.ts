import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksListComponent} from './books-list/books-list.component';
import {AddBookComponent} from './add-book/add-book.component';
import {UpdateBookComponent} from './update-book/update-book.component';
import {DeleteBookComponent} from './delete-book/delete-book.component';
import {BookGuard} from './guar/book-guard.guard';
import {DetailBookComponent} from './detail-book/detail-book.component';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';


// @ts-ignore
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'books',
        component: BooksListComponent
      },
      {
        path: 'books/add',
        component: AddBookComponent
      },
      {
        path: 'books/:id/edit',
        component: UpdateBookComponent
      },
      {
        path: 'books/:id/detail',
        component: DetailBookComponent
      },
      {
        path: 'books/:id/delete',
        component: DeleteBookComponent
      },
    ],
    canActivate: [BookGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
