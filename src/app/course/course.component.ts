import { comments } from './../classes/comments';
import { CoursesService } from './../courses.service';
import { Component } from '@angular/core';
import { observable } from 'rxjs';
import { posts } from '../classes/posts';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent{

  constructor(private _coursesservice:CoursesService){}

  lstcomments:comments[];
  lstposts:posts[];
  objposts:posts;

    ngOnInit(){
  
      this._coursesservice.getcomments().subscribe
        (
          data=>
          {
            this.lstcomments=data;
          }
        );

        this._coursesservice.getcommentsbyparameter().subscribe
        (
          data=>
            {
              //console.log(data);
              this.lstposts=data;
             
            }

        );
         console.log("=============================");
        var opost=new posts();

        opost.userId=5;
        opost.title='testtitlte';
        opost.body='testbody';

      
        let post1={id:1,userId:2,title:"x",body:'y'};
        console.log(post1);
        this._coursesservice.post(post1).subscribe
        (
          data=>
            {  
              this.objposts=data;
              // console.log("==========================");
              // console.log(this.objposts);
            }
        );
      
    }
}
