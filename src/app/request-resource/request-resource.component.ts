import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-resource',
  templateUrl: './request-resource.component.html',
  styleUrls: ['./request-resource.component.css']
})
export class RequestResourceComponent implements OnInit {

  resourceRequest:any[];
  project =[
    { id: '1', name: 'p 1' },
    { id: '2', name: 'p 2' },
    { id: '3', name: 'p 3' },
    { id: '4', name: 'p 4' }
  ];

  position=[
    { id: '1', name: 'pos 1' },
    { id: '2', name: 'pos 2' },
    { id: '3', name: 'pos 3' },
    { id: '4', name: 'pos 4' }
  ];

  no=[1,2,3,4,5,6,7,8,9,10];

  onSubmit(resourceRequest){
    this.resourceRequest=resourceRequest.value;
    console.log(this.resourceRequest);
  }

  constructor() { }

  ngOnInit() {

  
  }

 


}
