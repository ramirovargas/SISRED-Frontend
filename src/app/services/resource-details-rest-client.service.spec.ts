import { TestBed } from '@angular/core/testing';

import { ResourceDetailsRestClientService } from './resource-details-rest-client.service';

describe('ResourceDetailsRestClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResourceDetailsRestClientService = TestBed.get(ResourceDetailsRestClientService);
    expect(service).toBeTruthy();
  });
});
