//? Challenge: "Event Maestro: Handle It All!"

//! Objective
//* Create a program using Node.js EventEmitter that:

//? Listens for multiple types of user events (e.g., login, logout, purchase, and profile update).
//? Tracks how many times each event is emitted.
//? Logs a summary of all event occurrences when a special summary event is triggered.

//! Requirements
//? Create at least four custom events (e.g., user-login, user-logout, user-purchase, profile-update).
//? Emit these events multiple times with different arguments (e.g., username, item purchased).
//? Track and store the count of each event type.
//? Define a summary event that logs a detailed report of how many times each event was triggered.



const EventEmitter=require("events");
const { emit } = require("process");
const emitter=new EventEmitter();

//track how many times each event is triggered.
const eventCount={
    "user-login":0,
    "user-logout":0,
    "user-purchase":0,
    "user-update":0,
}

//defining four .on/eventListner.
emitter.on("user-login",(userLogin)=>{
    eventCount["user-login"]++
    console.log(`login ${userLogin}`);     
})

emitter.on("user-logout",(userLogout)=>{
     eventCount["user-logout"]++
    console.log(`logout ${userLogout}`);     
})

emitter.on("user-purchase",(purchase)=>{
     eventCount["user-purchase"]++
    console.log(`purchase ${purchase}`);
})

emitter.on("profile-update",(profile)=>{
    eventCount["user-update"]++
    console.log(`profile ${profile}`);
})

emitter.on("summary",()=>{
    console.log(eventCount);
    
})

//trigger emit for four events.
emitter.emit("user-login","chetan");
// emitter.emit("user-logout","rana");
emitter.emit("user-purchase","laptop");
emitter.emit("profile-update","chetan");


//summary events
emitter.emit("summary");