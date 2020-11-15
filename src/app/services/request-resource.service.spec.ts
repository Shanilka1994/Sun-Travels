import { TestBed } from '@angular/core/testing';

import { RequestResourceService } from './request-resource.service';

describe('RequestResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestResourceService = TestBed.get(RequestResourceService);
    expect(service).toBeTruthy();
  });
});
