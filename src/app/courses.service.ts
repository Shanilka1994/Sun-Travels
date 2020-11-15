import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpParams} from '@angular/common/http';
import {posts} from '../app/classes/posts'

@Injectable()
export class CoursesService{

constructor(private httpclient:HttpClient){ }

   getcomments():Observable<any>{

    return this.httpclient.get("https://jsonplaceholder.typicode.com/posts/1/comments");
   }

   getcommentsbyparameter():Observable<any>{
      let param1=new HttpParams().set('userId',"1");
      return this.httpclient.get("https://jsonplaceholder.typicode.com/posts",{params:param1});
   }


   post(opost:posts):Observable<any>{
      return this.httpclient.post("https://jsonplaceholder.typicode.com/posts",opost);

   }

}
