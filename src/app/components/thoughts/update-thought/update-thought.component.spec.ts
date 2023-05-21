import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateThoughtComponent } from './update-thought.component';

describe('UpdateThoughtComponent', () => {
  let component: UpdateThoughtComponent;
  let fixture: ComponentFixture<UpdateThoughtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateThoughtComponent]
    });
    fixture = TestBed.createComponent(UpdateThoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
