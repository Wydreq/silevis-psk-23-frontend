import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateOfPractiseComponent } from './date-of-practise.component';

describe('DateOfPractiseComponent', () => {
  let component: DateOfPractiseComponent;
  let fixture: ComponentFixture<DateOfPractiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateOfPractiseComponent]
    });
    fixture = TestBed.createComponent(DateOfPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
