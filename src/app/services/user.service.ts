
import { User } from '../interfaces/user';

var users:User[] = [];
var displayedUser!:User;

export function getUsers():User[] {
    fetch("http://localhost:3000/users").then(res => res.json()).then((res: User[]) => {
        users = res;
    });
    return users
}

export function listUsers():User[] {
    return users
}

export function userToSee(user:User) {
    displayedUser = user;
}

export function getUser(): User {
    return displayedUser;
}
