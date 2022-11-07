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
      children: [{
        name: 'integer',
        children: []
      },{
        name: 'string',
        children: []
      },{
        name: 'date',
        children: []
      }]
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

  BRANCHES = ['4.3', '4.2'];

  constructor() { }
  
  getAllNames(branch: string): Observable<ModelItemName[]> {
    return of(this.NAMES);
  }

  get(name: string, branch: string): Observable<Model> {
    return of({
      name: name
    });
  }

  getAllBranches() {
    return of(this.BRANCHES);
  }
}

export interface ModelItemName {
  name: string,
  children: ModelItemName[]
}

export interface Model {
  name: string
}