import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produc-detail',
  templateUrl: './produc-detail.component.html',
  styleUrls: ['./produc-detail.component.css']
})
export class ProducDetailComponent implements OnInit {
  cant: number = 0
  constructor() { }

  ngOnInit(): void {
  }
  modificar_cart( op:string){
    //let op = 2;
    if(op == "1")
    {
      this.cant++;

    }
    else
    {
      if(this.cant - 1 >= 0)
      this.cant--;
    }
  }
}
