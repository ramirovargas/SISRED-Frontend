import { TestBed } from '@angular/core/testing';

import { RevisionesService } from './revision.service';

describe('RevisionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RevisionesService = TestBed.get(RevisionesService);
    expect(service).toBeTruthy();
  });
});
