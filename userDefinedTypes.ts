// union type

let userId: string | number | boolean;
userId = "1234";
userId = 1234;
userId = true;

function displayUserInfo(aUserId: string | number) {
  console.log(aUserId);
}

// displayUserInfo("1234");
// displayUserInfo(1234);

// array type

let userNames: string[];
let userIds: Array<number>;
let userStatus: boolean[];

userNames = ["John", "Jane"];
userIds = [1, 2, 3];
userStatus = [true, false, true];

// console.log(userNames[0]);

let multipleTypes: (string | number)[];
multipleTypes = [1, "A", 2];

// console.log(userNames.sort());

// tuple types [mixed] - maintain serial order

let user: [number, string];
user = [101, "john"];
user.push(102, "jane");
// console.log(user, "user");

// enum types - no duplicate allows, store CONSTANTS
// numeric enum

enum RequestType {
  ReadData = 2,
  GetData = 3,
  SavData,
}
// console.log(RequestType, "numeric");

// string enum

enum RequestTypeString {
  ReadData = "READ_DATA",
  GetData = "GET_DATA",
}
// console.log(RequestTypeString, "string");

// hetergenous enum

enum RequestTypeHetergenous {
  id = 101,
  ReadData = "READ_DATA",
  GetData = "GET_DATA",
}
// console.log(RequestTypeHetergenous.GetData, "hetergenous");

// any type

let names: any;
names = "John";
names = 1234;
names = true;
names = [10, "20"];

// object type

let user1: object[];
let user2: {
  name: string;
  id?: number;
};
user1 = [
  {
    name: "Rakib",
    id: "027",
  },
  {
    name: "Rakib",
    id: "027",
  },
];
user2 = {
  name: "Rakib",
};
console.log(user1, "user1");
