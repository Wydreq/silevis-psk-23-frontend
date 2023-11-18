import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNewDatesComponent } from './request-new-dates.component';

describe('RequestNewDatesComponent', () => {
  let component: RequestNewDatesComponent;
  let fixture: ComponentFixture<RequestNewDatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestNewDatesComponent]
    });
    fixture = TestBed.createComponent(RequestNewDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
