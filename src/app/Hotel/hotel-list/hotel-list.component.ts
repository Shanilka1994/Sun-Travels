import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/hotel.service';

@Component({
  selector: 'hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {


  ngOnInit() {
  }

  hotels;

  constructor(service:HotelService) { 

    this.hotels=service.getHotels();
  }


}
