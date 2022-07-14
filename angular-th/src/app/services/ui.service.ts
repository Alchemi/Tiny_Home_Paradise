import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type OpenState = 'open' | 'closed';

@Injectable({
  providedIn: 'root'
})
export class UiService {
openState= new BehaviorSubject<OpenState>('open');

  constructor() { }

  getOpenState(): Observable<string> {
    return this.openState.asObservable();
  }


}
