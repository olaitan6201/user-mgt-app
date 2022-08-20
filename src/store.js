import { writable } from "svelte/store";

import user1 from "./assets/images/user1.png"
import user2 from "./assets/images/user2.png"
import user3 from "./assets/images/user3.png"
import userHack from "./assets/images/user-hack.png"

export const users = writable([
    {
        id: 1,
        image: user1,
        name: "Me",
        email: "Me@mail.com",
        active: true
    },
    {
        id: 2,
        image: user2, 
        name: "Jeni",
        email: "Jeni@mail.com",
        active: false
    },
    {
        id: 3,
        image: user3,
        name: "John",
        email: "John@mail.com",
        active: false
    },
    {
        id: 4,
        image: userHack,
        name: "Hacker",
        email: "Hacker@mail.com",
        active: true
    }
]);

export const removeUser = ({detail}) => {
    users.update(_users => _users.filter(user => user.id !== detail))
}

export const createUser = ({detail}) => {
    const rndInt = Math.floor(Math.random() * 3) + 1
    users.update(_users => [
        ..._users,
        {
            id: +_users[_users.length-1].id+1, 
            image: eval(`user${rndInt}`),
            ...detail
        }
    ])
}