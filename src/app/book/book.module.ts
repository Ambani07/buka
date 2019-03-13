import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MapModule } from '../common/map/map.module';

import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookComponent } from './book.component';

import { BookService } from './shared/book.service';
import { BookDetailComponent } from './book-detail/book-detail.component';


const routes: Routes = [
    {path: 'book',
    component: BookComponent,
    children: [
        {path: '', component: BookListComponent},
        {path: ':bookId', component: BookDetailComponent}
    ]
    }
];
@NgModule({
    declarations: [
        BookListComponent,
        BookListItemComponent,
        BookComponent,
        BookDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        MapModule
    ],
    providers: [BookService]
})
export class BookModule{

}