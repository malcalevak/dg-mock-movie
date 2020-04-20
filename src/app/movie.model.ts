import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Movie {
    constructor(
        public imdbID: string,
        public Title: string,
        public Year: number,
        public Rated: string,
        public Released: string,
        public Runtime: string,
        public Plot: string,
    ) {}
}

@Injectable({
    providedIn: 'root'
})

export class MovieAdapter implements Adapter<Movie> {
    adapt(item: any): Movie {
        return new Movie(item.imdbID, item.Title, item.Year, item.Rated, new Date(item.Released).toISOString(), item.Runtime, item.Plot);
    }
}
