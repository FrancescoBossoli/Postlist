import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { getFilteredPosts, changeActiveStatus, postToVisit } from 'src/app/services/post-service.service';

@Component({
    selector: 'app-inactive-posts',
    templateUrl: './inactive-posts.component.html',
    styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {

    posts: Post[] = [];

    constructor() { }


    ngOnInit(): void {
        this.posts = getFilteredPosts(false);
    }

    changeActiveStatus(id:number):void {
        changeActiveStatus(id);
        this.posts = getFilteredPosts(false);
    }

    postToVisit(post:Post) {
        postToVisit(post);
    }
}
