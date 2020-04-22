import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  movies: Movie[] = Array();
  decades: string[];
  currentDecade: string;
  moviesObservable$: Observable<Movie[]>;



  constructor(private movieService: MovieService) {}

  ngOnInit() {
    const decadeSet = new Set<string>();
    const decadeRegEx = /(\d{3})(\d)/gm;
    const decadeReplace = `$10`;
    const moviesObservable$ = this.movieService.getMovies();
    moviesObservable$.subscribe((moviesObservable: Observable<Movie>[]) => {
      moviesObservable.map(movie => {
        movie.subscribe((data: Movie) => {
          this.movies.push(data);
          decadeSet.add(data.Year.toString().replace(decadeRegEx, decadeReplace));
          // how do we properly delay sorting until all are processed?
          this.decades = Array.from(decadeSet).sort().reverse();
          this.currentDecade = this.decades[0];
        });
      });
    });
  }
}
