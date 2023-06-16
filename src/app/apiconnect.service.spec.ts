import { TestBed } from '@angular/core/testing';

import { APICONNECTService } from './apiconnect.service';

describe('APICONNECTService', () => {
  let service: APICONNECTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APICONNECTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
