import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieAdapter } from './movie.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private apiRoot = 'https://www.omdbapi.com';
  private apiKey = 'c23cb05f';

  constructor(private http: HttpClient, private adapter: MovieAdapter) { }

  public getMovies(searchQuery = 'Batman'): Observable<Observable<Movie>[]> {
    const urlSearch = `${this.apiRoot}/?s=${searchQuery}&type=movie&apikey=${this.apiKey}`;
    return this.http.get<any>(urlSearch).pipe(
      map(response => {
        // should we check for existence of Search?
        return response.Search.map(movie => {
          return this.getMovie(movie.imdbID); /*.subscribe((data: Movie) => {
            console.log(data);
            return data;
          });*/
        });
      })
    );
  }

  public getMovie(imdbID: string): Observable<Movie> {
    const urlMovie = `${this.apiRoot}/?i=${imdbID}&apikey=${this.apiKey}`;
    return this.http.get<any>(urlMovie).pipe(
      map(movie => this.adapter.adapt(movie))
    );
  }

}
