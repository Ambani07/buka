import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';

import { BookModule } from './book/book.module';

import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {path: '', redirectTo: '/books' , pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BookModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
