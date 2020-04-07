import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from '../../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor(private httpclient:HttpClient) { }

  GetAllPosts():Observable<post[]>
  {console.log('in get all post service');
    return this.httpclient.get<post[]>('https://jsonplaceholder.typicode.com/posts');    
  }
}
