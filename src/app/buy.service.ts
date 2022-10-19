import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyService {
 private cart:number = 0;
  private cart$: Subject<number>;
 
  constructor() { 
    this.cart = 0;
    this.cart$ = new Subject();
  }
  add_cart(cant:number){
   this.cart = this.cart + cant;
   this.cart$.next(this.cart);
  }
  getcart$():Observable<number>{
    return this.cart$.asObservable();
   }
  getcart(){return this.cart}
  reset_cart(){
    this.cart = 0;
   this.cart$.next(this.cart);
  }
}
