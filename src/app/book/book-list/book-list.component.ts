import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'buka-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books : any[] = [];

  constructor(private bookService : BookService) {}

  ngOnInit() {
    const bookObservable = this.bookService.getBooks();

    bookObservable.subscribe(

      (books) => {
        this.books = books
      },
      (err) => {
        
      },
      () => {

      }
    );
  }

}
