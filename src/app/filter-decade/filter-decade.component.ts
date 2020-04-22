import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-decade',
  templateUrl: './filter-decade.component.html',
  styleUrls: ['./filter-decade.component.scss']
})
export class FilterDecadeComponent {

  @Input() decades: string[];

  changeDecade(event: MouseEvent, decade: string) {
    document.querySelector('.button-wrapper [aria-pressed="true"]').setAttribute('aria-pressed', 'false');
    (event.currentTarget as HTMLButtonElement).setAttribute('aria-pressed', 'true');
    // TODO Find the proper way to handle this
    document.querySelectorAll('.card').forEach(element => (element as HTMLElement).classList.add('hidden'));
    document.querySelectorAll('.card.decade' + decade).forEach(element => (element as HTMLElement).classList.remove('hidden'));
  }
}
