import { TestBed } from '@angular/core/testing';

import { VersionRedRevisionService } from './version-red-revision.service';

describe('VersionRedRevisionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VersionRedRevisionService = TestBed.get(VersionRedRevisionService);
    expect(service).toBeTruthy();
  });
});
