import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThoughtComponent } from './list-thought.component';

describe('ListThoughtComponent', () => {
  let component: ListThoughtComponent;
  let fixture: ComponentFixture<ListThoughtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListThoughtComponent]
    });
    fixture = TestBed.createComponent(ListThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
