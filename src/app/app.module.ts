import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';

import { BookModule } from './book/book.module';
import { MapComponent } from './common/map/map.component';


const routes: Routes = [
  {path: '', redirectTo: '/book' , pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
