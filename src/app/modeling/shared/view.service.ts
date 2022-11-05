import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  public name$ = new Subject<string>();
  
  constructor() { }

  public show(name: string) {
    this.name$.next(name);
  }
}
