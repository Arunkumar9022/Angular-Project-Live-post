import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({
    providedIn:'root'
})
export class PostService
{
    listOfPosts: Post[] = [
        new Post("Nature-Maldives & Philiphines","Welcome to Nature wolrd","https://wallpapers.com/images/featured/eoxvk1itsaibfbo1.jpg","test@test.com",new Date(),5),
        new Post("Hampi","Welcome to Hampi Architecture","https://karnatakatourism.org/wp-content/uploads/2020/06/Stone-Chariot-Hampi-Heritage.jpg","test@test.com",new Date(),2),
        new Post("Great China Wall","Welcome to China Great Wall","https://upload.wikimedia.org/wikipedia/commons/1/10/20090529_Great_Wall_8185.jpg","test@test.com",new Date(),3),
       ]

       //facility 1
    getPosts(){
        return this.listOfPosts;
    }

    //facility 2
    deletePost(index:number)
    {
        this.listOfPosts.splice(index,1);
    }
    //facility 3
    addPost(post:Post){
        this.listOfPosts.push(post)
    }
    //facility 4
    updatePost(index:number,post:Post)
    {
        this.listOfPosts[index]=post;
    }
    //facility 5
    getPost(index:number)
    {
      return this.listOfPosts[index];
    }

    //facility 6
    likePost(index:number)
    {
    this.listOfPosts[index].numberofLikes+=1
    }
}