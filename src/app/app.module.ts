import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardMovieComponent } from './card-movie/card-movie.component';
import { FilterDecadeComponent } from './filter-decade/filter-decade.component';

@NgModule({
  declarations: [
    AppComponent,
    CardMovieComponent,
    FilterDecadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
