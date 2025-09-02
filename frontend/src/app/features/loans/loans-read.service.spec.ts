import { TestBed } from '@angular/core/testing';

import { LoansReadService } from './loans-read.service';

describe('LoansReadService', () => {
  let service: LoansReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoansReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
