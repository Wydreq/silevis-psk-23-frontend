import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInteshipDateModalComponent } from './add-inteship-date-modal.component';

describe('AddInteshipDateModalComponent', () => {
  let component: AddInteshipDateModalComponent;
  let fixture: ComponentFixture<AddInteshipDateModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInteshipDateModalComponent]
    });
    fixture = TestBed.createComponent(AddInteshipDateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
