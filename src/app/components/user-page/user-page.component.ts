import { Component, OnInit, DoCheck } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { getUser } from 'src/app/services/user.service';
import { Post } from 'src/app/interfaces/post';
import { getPostsByAuthor, changeActiveStatus, postToVisit, getFilteredPartialPosts } from 'src/app/services/post-service.service';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss']
})

export class UserPageComponent implements OnInit, DoCheck {

    user!: User;
    posts!: Post[];
    postsAttivi!: Post[];
    postsInattivi!: Post[];

    constructor() { }

    ngOnInit(): void {
        this.user = getUser();
        this.posts = getPostsByAuthor(this.user.name);
        this.postsAttivi = getFilteredPartialPosts(this.posts, true);
        this.postsInattivi = getFilteredPartialPosts(this.posts, false);
    }

    ngDoCheck(): void {
        this.user = getUser();
        this.posts = getPostsByAuthor(this.user.name);
        this.postsAttivi = getFilteredPartialPosts(this.posts, true);
        this.postsInattivi = getFilteredPartialPosts(this.posts, false);
    }

    changeActiveStatus(id:number):void {
        changeActiveStatus(id);
        this.posts = getPostsByAuthor(this.user.name);
    }

    postToVisit(post:Post) {
        postToVisit(post);
    }
}
