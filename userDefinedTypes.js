// union type
var userId;
userId = "1234";
userId = 1234;
userId = true;
function displayUserInfo(aUserId) {
    console.log(aUserId);
}
// displayUserInfo("1234");
// displayUserInfo(1234);
// array type
var userNames;
var userIds;
var userStatus;
userNames = ["John", "Jane"];
userIds = [1, 2, 3];
userStatus = [true, false, true];
// console.log(userNames[0]);
var multipleTypes;
multipleTypes = [1, "A", 2];
// console.log(userNames.sort());
// tuple types [mixed] - maintain serial order
var user;
user = [101, "john"];
user.push(102, "jane");
// console.log(user, "user");
// enum types - no duplicate allows, store CONSTANTS
// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["ReadData"] = 2] = "ReadData";
    RequestType[RequestType["GetData"] = 3] = "GetData";
    RequestType[RequestType["SavData"] = 4] = "SavData";
})(RequestType || (RequestType = {}));
// console.log(RequestType, "numeric");
// string enum
var RequestTypeString;
(function (RequestTypeString) {
    RequestTypeString["ReadData"] = "READ_DATA";
    RequestTypeString["GetData"] = "GET_DATA";
})(RequestTypeString || (RequestTypeString = {}));
// console.log(RequestTypeString, "string");
// hetergenous enum
var RequestTypeHetergenous;
(function (RequestTypeHetergenous) {
    RequestTypeHetergenous[RequestTypeHetergenous["id"] = 101] = "id";
    RequestTypeHetergenous["ReadData"] = "READ_DATA";
    RequestTypeHetergenous["GetData"] = "GET_DATA";
})(RequestTypeHetergenous || (RequestTypeHetergenous = {}));
// console.log(RequestTypeHetergenous.GetData, "hetergenous");
// any type
var names;
names = "John";
names = 1234;
names = true;
names = [10, "20"];
// object type
var user1;
var user2;
user1 = [
    {
        name: "Rakib",
        id: "027"
    },
    {
        name: "Rakib",
        id: "027"
    },
];
user2 = {
    name: "Rakib"
};
console.log(user1, "user1");
