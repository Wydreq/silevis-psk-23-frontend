import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationFormComponent } from './attestation-form.component';

describe('AttestationFormComponent', () => {
  let component: AttestationFormComponent;
  let fixture: ComponentFixture<AttestationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttestationFormComponent]
    });
    fixture = TestBed.createComponent(AttestationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
