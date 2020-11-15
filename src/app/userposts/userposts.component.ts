import { UserPostsService } from './../user-posts.service';
import { posts } from './../classes/posts';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-userposts',
  templateUrl: './userposts.component.html',
  styleUrls: ['./userposts.component.css']
})
export class UserpostsComponent implements OnInit {

  posts:any[];
  post:any[];
  userid;

  c= ["p1","p2","p3","p4","p5"];
  data = [
      {
        empNo:"1",
        name:"Shanilka",
        allocation:
          {startDate:"01-01-2020",
          projectId:"kriyo"}
        
      },
      {
        empNo:"2",
        name:"Chanduka",
        allocation:
          {startDate:"01-01-2020",
          projectId:"CG"}
        
      },
      {
        empNo:"3",
        name:"Ilmie",
        allocation:
          {startDate:"01-01-2020",
          projectId:"FC"}
        
      }


  ];
 // private url="https://jsonplaceholder.typicode.com/posts";

  constructor(private service:UserPostsService,private route:ActivatedRoute) { }

 ngOnInit() {
  //  //Get all posts- inside oninit
  //   this.service.getPosts().
  //   subscribe(
  //     (response:any[])=>  {
  //         this.posts=response;
  //       //console.log(response);
  //       },
        
  //       error=>
  //       {
  //         alert("Unexpecter error Occured");
  //         console.log(error);
  //       }
  //   );

  //   //route parameter- inside onInit
  //   this.route.paramMap.subscribe(
  //     params=>{
  //       this.userid=+params.get('id');
  //       console.log(this.userid);
  //     }
      
  //   );

  }


//Add title
  addTitle(title){
    
    let post={title:title.value};
    this.posts.splice(0,0,post);

    title.value="";

   this.service.createTitle(post)
   .subscribe(
      data=>
      {
        post['id']=data.id;
       
       // console.log(data);
      },
      (error:Response)=>{
        if(error.status===400){
          alert("Bad request");
        }
        else{
        alert('Unexpected error Occured');
        console.log(error);
      }
    }

      );

  }



// Updating a post
  updatePost(post){
    this.service.updateTitle(post)
    .subscribe
    (
      data=>{
        console.log(data);
      },
      error=>
      {
        alert("Unexpecter error Occured");
        console.log(error);
      }
    );
  }



  // Deleting a post
  deletePost(post){

    let index=this.posts.indexOf(post);
    this.posts.splice(index,1);
    
   this.service.deleteTtile(post.id)
   .subscribe
    (
     ()=>null ,
      (error:Response)=>
      {
        if(error.status===404)
          alert("this post has already been deleted");
        else{
          alert("Unexpecter error Occured");
        console.log(error);
        }
        
      }
    );
  }
 


  }
