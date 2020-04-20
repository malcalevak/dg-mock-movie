import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDecadeComponent } from './filter-decade.component';

describe('FilterDecadeComponent', () => {
  let component: FilterDecadeComponent;
  let fixture: ComponentFixture<FilterDecadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDecadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDecadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
