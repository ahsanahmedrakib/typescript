type User = { name: string; id?: number };

let users: User[];
users = [];

let users1: User;
let users2: User;
let users3: User;

users1 = { name: "Ahsan" };
users2 = { name: "Ahmed", id: 102 };
users3 = { name: "Rakib", id: 103 };

users.push(users1);
users.push(users2);
users.push(users3);
console.log(users);

type RequestType = "GET" | "POST" | "PUT" | "DELETE";
let getRequest: RequestType = "GET";
getRequest = "GET";
