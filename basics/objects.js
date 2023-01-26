let user = {
    name: "chris",
    age: 21,
};
function sayHi(){
    alert("hello");
}
user.message = sayHi;

console.log(user.message);
