import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperVisionComponent } from './super-vision.component';

describe('SuperVisionComponent', () => {
  let component: SuperVisionComponent;
  let fixture: ComponentFixture<SuperVisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperVisionComponent]
    });
    fixture = TestBed.createComponent(SuperVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
