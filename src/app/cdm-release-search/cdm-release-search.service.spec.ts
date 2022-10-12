import { TestBed } from '@angular/core/testing';

import { CdmReleaseSearchService } from './cdm-release-search.service';

describe('CdmReleaseSearchService', () => {
  let service: CdmReleaseSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdmReleaseSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
