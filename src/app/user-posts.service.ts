import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserPostsService {
  private url="http://localhost:8080/SpringMVCHibernate_war_exploded/getAllPosts";
  constructor(private http:HttpClient) { }

  getPosts():Observable<any>{
   return this.http.get(this.url);
  }

  getPostById(id):Observable<any>{
    console.log('From get post by id'+id);
    let post= this.http.get(this.url+'/'+id);
    console.log(post);
    return post;

  }

  createTitle(post):Observable<any>{
    return this.http.post<any>(this.url,post);
  }

  updateTitle(post):Observable<any>{
    return this.http.patch<any>(this.url+'/'+post.id,{isRead:true});
  }

  deleteTtile(id):Observable<any>{
    return  this.http.delete<any>(this.url+'/'+id);
  }

  
} 
