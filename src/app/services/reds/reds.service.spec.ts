import { TestBed } from '@angular/core/testing';

import { RedsService } from './reds.service';

describe('RedsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedsService = TestBed.get(RedsService);
    expect(service).toBeTruthy();
  });
});
