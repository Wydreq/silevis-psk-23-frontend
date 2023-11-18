import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntershipDatesComponent } from './intership-dates.component';

describe('IntershipDatesComponent', () => {
  let component: IntershipDatesComponent;
  let fixture: ComponentFixture<IntershipDatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntershipDatesComponent]
    });
    fixture = TestBed.createComponent(IntershipDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
