import {  OnInit, Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactMethod= [
    {id:1,name:'Email'},
    {id:2, name:'Phone'}
];

isFavorite:boolean;
  constructor() { }

  ngOnInit() {
  }

 
  log(fname){
      console.log(fname);
  }
  submit(f){
    console.log(f.value);
  }
  OnClick(){
    this.isFavorite=!this.isFavorite;
  }

  isCourses(){
    courses:['c1','c2','c3'];
  }
}
