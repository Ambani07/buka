import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookService{

  constructor(private http: HttpClient){}

  public getBooks(): Observable<any>{
    return this.http.get('/api/v1/books');
  }

  public getBookById(bookId: string): Observable<any>{

    return this.http.get('/api/v1/books/' + bookId);
  }
}