import { Component, OnInit } from '@angular/core';
import { BuyService } from '../buy.service';

@Component({
  selector: 'app-produc-detail',
  templateUrl: './produc-detail.component.html',
  styleUrls: ['./produc-detail.component.css']
})
export class ProducDetailComponent implements OnInit {
  cant: number = 0;
  image_detail = "assets/image-product-1.jpg";
  img_selec ={"border": "3px solid","border-color": "hsl(26, 100%, 55%)","opacity": "80%" }
  img1 = {};
  img2 = {};
  img3 = {};
  img4 = {};
  constructor(private buy:BuyService) { }

  ngOnInit(): void {
  }
  modificar_cart( op:string){
    
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
  change_image(op:string){
    this.image_detail = "assets/image-product-"+op+".jpg";
    this.img1 = {};
    this.img2 = {};
    this.img3 = {};
    this.img4 = {};
    switch(op){
     case '1': this.img1 = this.img_selec;break
     case '2': this.img2 = this.img_selec;break
     case '3': this.img3 = this.img_selec;break
     case '4': this.img4 = this.img_selec;break
    }
    
  }
  add_cart(){
    this.buy.add_cart(this.cant);
    this.cant = 0;
  }
}
