import { Injectable } from '@angular/core';
import { CdmReleaseSearchRequest } from './cdm-release-search.model';

@Injectable({
  providedIn: 'root'
})
export class CdmReleaseSearchService {

  constructor() { }

  search(request: CdmReleaseSearchRequest) {
    console.log(request);
  }
}
