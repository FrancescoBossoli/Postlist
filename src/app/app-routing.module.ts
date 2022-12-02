import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes, UrlMatcher, UrlSegment, UrlMatchResult } from '@angular/router';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { HomeComponent } from './home/home.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { Post } from 'src/app/interfaces/post';
import { getFilteredPosts } from './services/post-service.service';
import { UserPageComponent } from './components/user-page/user-page.component';
import { User } from './interfaces/user';
import { listUsers } from './services/user.service';


var inactivePosts:Post[]=[];
var activePosts:Post[]=[];
var users:User[]=[];


function findId(posts:Post[]|User[], id:number):boolean {
    let x = false;
    console.log(posts);
    console.log(users);
    posts.forEach((e) => { if (e.id == id) {x = true}});
    return x;
}

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    matcher: (url: UrlSegment[]): UrlMatchResult|null => {
        users=listUsers();
        if (url[0].path === "users" && url.length == 1) {
            return {consumed : url.slice(0, 1)}
        }
        else if (url[0].path === "users" && findId(users, Number(url[1].path))) {
            return {consumed : url.slice(0, 1)}
        }
        else if (url[0].path === "users" && !findId(users, Number(url[1].path))) {
            return {consumed : url.slice(0, 0)}
        }
        else return null
    },
    component: UserListComponent,
    children: [
        {
            path: ":id",
            component: UserPageComponent
        }
    ]
  },
  {
    matcher: (url: UrlSegment[]): UrlMatchResult|null => {
        activePosts = getFilteredPosts(true);
        if (url[0].path === "active" && url.length == 1) {
            return {consumed : url.slice(0, 1)}
        }
        else if (url[0].path === "active" && findId(activePosts, Number(url[1].path))) {
            return {consumed : url.slice(0, 1)}
        }
        else if (url[0].path === "active" && !findId(activePosts, Number(url[1].path))) {
            return {consumed : url.slice(0, 0)}
        }
        else return null
    },
    children: [
        {
            path: "",
            component: ActivePostsComponent
        },
        {
            path: ":id",
            component: PostDetailComponent
        }
    ]
  },
  {
    matcher: (url: UrlSegment[]): UrlMatchResult|null  => {
        inactivePosts = getFilteredPosts(false);
        if (url[0].path === "inactive" && url.length == 1) {
            return {consumed : url.slice(0, 1)}
        }
        else if (url[0].path === "inactive" && findId(inactivePosts, Number(url[1].path))) {
            return {consumed : url.slice(0, 1)}
        }
        else if (url[0].path === "inactive" && !(findId(inactivePosts, Number(url[1].path)))) {
            return {consumed: url.slice(0, 0)}
        }
        else return null
    },
    children: [
        {
            path: "",
            component: InactivePostsComponent
        },
        {
            path: ":id",
            component: PostDetailComponent
        }
    ]
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit {

    constructor() { }

    ngOnInit(): void {
        activePosts = getFilteredPosts(true);
        inactivePosts = getFilteredPosts(false);
        users = listUsers();
    }
 }
