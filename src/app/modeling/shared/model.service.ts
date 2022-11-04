import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  NAMES = [{
    name: "Core Components",
    children: []
  }];

  constructor() { }
  
  getAllNames(): Observable<ModelItemName[]> {
    return of(this.NAMES);
  }

}

export interface ModelItemName {
  name: string,
  children: ModelItemName[]
}
