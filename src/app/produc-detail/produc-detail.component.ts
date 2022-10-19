import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produc-detail',
  templateUrl: './produc-detail.component.html',
  styleUrls: ['./produc-detail.component.css']
})
export class ProducDetailComponent implements OnInit {
  cant: number = 3
  constructor() { }

  ngOnInit(): void {
  }

}
