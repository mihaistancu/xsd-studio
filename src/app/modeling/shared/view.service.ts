import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  public name$ = new BehaviorSubject<string>('');
  public branch$ = new BehaviorSubject<string>('');
  
  constructor() { }

  public show(name: string) {
    this.name$.next(name);
  }

  public changeBranch(branch: string) {
    this.branch$.next(branch);
  }
}
