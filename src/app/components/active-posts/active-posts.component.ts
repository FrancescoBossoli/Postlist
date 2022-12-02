import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { getFilteredPosts, changeActiveStatus, postToVisit } from 'src/app/services/post-service.service';

@Component({
    selector: 'app-active-posts',
    templateUrl: './active-posts.component.html',
    styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {


    posts: Post[] = []


    constructor() { }

    ngOnInit(): void {
        this.posts = getFilteredPosts(true);
    }

    changeActiveStatus(id: number): void {
        changeActiveStatus(id);
        this.posts = getFilteredPosts(true);
    }

    postToVisit(post:Post) {
        postToVisit(post);
    }

}
