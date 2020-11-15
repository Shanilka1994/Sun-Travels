import { ActivatedRoute } from '@angular/router';
import { UserPostsService } from './../user-posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  post:any[];
  userid;
  constructor(private service:UserPostsService,private route:ActivatedRoute) { }

  ngOnInit() {

     //route parameter- inside onInit
     this.route.paramMap.subscribe(
      params=>{
        this.userid=+params.get('id');
        console.log(this.userid);
      }
    );

    //get post by id
    this.service.getPostById(this.userid).
    subscribe(
      (response:any[])=>  {
        this.post=response;
        console.log(this.post);
        },
        error=>
        {
          alert(error.message);
          console.log(error);
        }
  
    );
      }
  }


