import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingIntershipFormComponent } from './passing-intership-form.component';

describe('PassingIntershipFormComponent', () => {
  let component: PassingIntershipFormComponent;
  let fixture: ComponentFixture<PassingIntershipFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassingIntershipFormComponent]
    });
    fixture = TestBed.createComponent(PassingIntershipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
