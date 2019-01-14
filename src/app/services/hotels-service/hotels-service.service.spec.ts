import { TestBed } from '@angular/core/testing';

import { HotelsServiceService } from './hotels-service.service';

describe('HotelsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelsServiceService = TestBed.get(HotelsServiceService);
    expect(service).toBeTruthy();
  });
});
