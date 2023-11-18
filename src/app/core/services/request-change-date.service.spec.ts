import { TestBed } from '@angular/core/testing';

import { RequestChangeDateService } from './request-change-date.service';

describe('RequestChangeDateService', () => {
  let service: RequestChangeDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestChangeDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
