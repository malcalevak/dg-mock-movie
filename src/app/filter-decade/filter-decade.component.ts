import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-decade',
  templateUrl: './filter-decade.component.html',
  styleUrls: ['./filter-decade.component.scss']
})

export class FilterDecadeComponent {

  @Input() decades: number[];
  @Input() currentDecade: number;

  @Output() currentDecadeChange = new EventEmitter<number>();

  setDecade(newDecade: number) {
    this.currentDecade = newDecade;
    this.currentDecadeChange.emit(this.currentDecade);
  }
}
