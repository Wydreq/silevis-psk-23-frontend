import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationForInternFormComponent } from './application-for-intern-form.component';

describe('ApplicationForInternFormComponent', () => {
  let component: ApplicationForInternFormComponent;
  let fixture: ComponentFixture<ApplicationForInternFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationForInternFormComponent]
    });
    fixture = TestBed.createComponent(ApplicationForInternFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
