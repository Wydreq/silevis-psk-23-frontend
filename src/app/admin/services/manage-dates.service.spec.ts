import { TestBed } from '@angular/core/testing';

import { ManageDatesService } from './manage-dates.service';

describe('ManageDatesService', () => {
  let service: ManageDatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageDatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
