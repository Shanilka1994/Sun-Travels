import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})


export class ProductAlertsComponent implements OnInit {
  @Input() product; //define a property named product with an @Input() decorator
  @Output() notify = new EventEmitter(); // define a property named notify with an @Output() decorator and an instance of EventEmitter(). This allows the product alert component to emit an event when the value of the notify property changes.
  constructor() { }

  ngOnInit() {
  }
  

}
