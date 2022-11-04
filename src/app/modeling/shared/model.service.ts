import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  NAMES = [{
    name: 'Core Components',
    children: [{
      name: 'Primitives',
      children: []
    },{
      name: 'CDT',
      children: []
    },{
      name: 'BDT',
      children: []
    }]
  }, {
    name: 'Pensions',
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
