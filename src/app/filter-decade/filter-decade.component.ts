import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-decade',
  templateUrl: './filter-decade.component.html',
  styleUrls: ['./filter-decade.component.scss']
})
export class FilterDecadeComponent {

  @Input() decades: string[];

}
