import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { getPost } from 'src/app/services/post-service.service';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

    post!:Post;

    constructor() { }

    ngOnInit(): void {
        this.post = getPost();
    }

}
