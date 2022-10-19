import { Component, OnInit } from '@angular/core';
import { BuyService } from '../buy.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private buy:BuyService) { }
  badge$:any;
  badge:number = 0;
  total:number = 0;
  ngOnInit(): void {
   this.badge$ =  this.buy.getcart$().subscribe(res => {this.badge = res; this.total = 125 * this.badge; });
  //  this.badge = this.buy.getcart();
  }
  delete_cart(){
    this.buy.reset_cart();
  }
}
