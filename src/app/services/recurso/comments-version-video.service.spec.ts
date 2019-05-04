import { TestBed } from '@angular/core/testing';

import { CommentsVersionVideoService } from './comments-version-video.service';

describe('CommentsVersionVideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentsVersionVideoService = TestBed.get(CommentsVersionVideoService);
    expect(service).toBeTruthy();
  });
});
