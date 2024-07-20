import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private _sharedServ: SharedService) { }

  multiply(a: number, b: number){
    this._sharedServ.mySharedFunction()
    return a * b;
  }

  add(a: number, b: number) {
    this._sharedServ.mySharedFunction();
    return a + b;
  }
}
