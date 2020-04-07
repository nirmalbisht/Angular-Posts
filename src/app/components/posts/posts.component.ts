import { Component, OnInit, Input } from '@angular/core';
import { post } from '../../../models/post'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() PostInput:post;
  constructor() { }

  ngOnInit(): void {
  }

  ViewFullPost()
  {
    alert(this.PostInput.id.toString() + this.PostInput.title);
  }

}
