import { style } from '@angular/animations';
import { Component,OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  listOfPosts: Post[] = [
    // new Post("Nature","Welcome to Nature wolrd","http://localhost:4200/assets/images/Beach.jpg","test@test.com",new Date()),
    // new Post("Hampi","Welcome to Hampi Architecture","https://karnatakatourism.org/wp-content/uploads/2020/06/Stone-Chariot-Hampi-Heritage.jpg","test@test.com",new Date()),
    // new Post("Great China Wall","Welcome to China Great Wall","https://upload.wikimedia.org/wikipedia/commons/1/10/20090529_Great_Wall_8185.jpg","test@test.com",new Date()),


  ]
  constructor(private postService:PostService){}

  ngOnInit():void
  {
    this.listOfPosts=this.postService.getPosts();
  }
}
