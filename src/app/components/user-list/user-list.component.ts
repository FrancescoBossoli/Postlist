import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { userToSee, listUsers } from 'src/app/services/user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {

    users: User[] = [];

    constructor() { }

    ngOnInit(): void {
        this.users = listUsers();
    }

    userToVisit(user:User) {
        userToSee(user);
    }

}
