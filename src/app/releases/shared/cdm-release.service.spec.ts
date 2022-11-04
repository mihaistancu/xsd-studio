import { TestBed } from '@angular/core/testing';

import { CdmReleaseService } from './cdm-release.service';

describe('CdmReleaseService', () => {
  let service: CdmReleaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdmReleaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
