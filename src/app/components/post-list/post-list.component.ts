import { Component, OnInit } from '@angular/core';
import { post } from '../../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts:post[];

  constructor(private postservice:PostsService) { 
    console.log('In post list component constructor');
  }

  ngOnInit(): void {
    console.log('In post list component');
    this.postservice.GetAllPosts().subscribe(Allposts=> {
      this.posts = Allposts.filter(postItem=>postItem.id <= 10);
    }); 
  }

}
