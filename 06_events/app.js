//*Import EventEmitter class
const EventEmitter=require("events");

//*create an instances of the EventEmitter class
const emitter=new EventEmitter();

//*1.Define an event listener (.on)/(addListener)
emitter.on("greet",(argument)=>{
    console.log(`Hello,${argument.name}, ${argument.prof}`);
    
})
//*2.Trigger (emit) the "greet" event.
// emitter.emit("greet");


//? you can also pass an argument while emitting.
// emitter.emit("greet","Chetan Rana");

//? passing multiple argument as a object.
emitter.emit("greet",{name:"chetan rana",prof:"fronted developer"});





