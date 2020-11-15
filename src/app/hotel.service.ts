import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }

  hotelList=[1,2,3];

  getHotels(){
  return this.hotelList;
}}
