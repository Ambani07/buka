import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'buka-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent implements OnInit {

  @Input() bookItem: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
