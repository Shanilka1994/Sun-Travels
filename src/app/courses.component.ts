// import { CoursesService } from './courses.service';
// import { Component } from '@angular/core';


// @ Component({
//     selector: 'courses',  //<courses> "courses" || <div class="courses"> ".courses" ||<div id="courses"> "#courses"
//     template: `<h2>{{"Title: "+ getTitle()}}</h2>
//                 <ul>
//                     <li *ngFor="let c of courses">
//                         {{c}}
//                      </li>
//                </ul>
//                <button class="btn btn-primary" [class.active]="isactive">save</button>
//                <br/>
//                <br/>
//                <button (click)="onSave($event)">Event</button>
//                <br/>
//                <br/>
//                <input [(ngModel)]="email" (keyup.enter)="OnKeyUp()"/>
//                <br/>
//                <br/>
//                {{pipeText |summary}}
//                 `

// })

// export class CoursesComponent{

// title="List of courses"
// isactive=true;
// courses;
// email="x@gmail.com";
// pipeText= "aaaaa bbb ccc ffff www rrr  tt   ttttt  hhh hyy y y  d w wef efwe  wefew ar";

// onSave($event){
//     console.log('Button was clicked-event binding', $event);
//     }

//     OnKeyUp(){
//     console.log(this.email);
// }

// getTitle(){
//     return this.title;
// }

// constructor(service: CoursesService){
//     //let c= new CoursesService();
//     this.courses=service.getCourses();

// }
// }