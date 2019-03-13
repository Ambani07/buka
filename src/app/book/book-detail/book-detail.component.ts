import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../shared/book.model';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'buka-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book : Book;

  constructor(private route: ActivatedRoute, private bookServices: BookService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getBook(params['bookId']);
    });
  }

  getBook(bookId: string){
    this.bookServices.getBookById(bookId).subscribe(
      (book: Book) => {
        this.book = book;
      }
    );
  }

}
