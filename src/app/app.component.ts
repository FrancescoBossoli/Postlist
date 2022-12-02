import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user';
import { getPosts } from './services/post-service.service';
import { getUsers } from './services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    title = 'Routing';
    users: User[] = [];

    constructor() { }

    ngOnInit(): void {
        getPosts();
        getUsers();
    }
}


