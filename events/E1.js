import event from "events";

const eventEmitter = new event.EventEmitter();

eventEmitter.once("test",()=>{
    console.log("Test event caught...");
});
eventEmitter.once("click",()=>{
    console.log("Clicked clicked...")
});

eventEmitter.emit("test");
eventEmitter.emit("click");
eventEmitter.emit("click");
eventEmitter.emit("click");
eventEmitter.emit("click");
eventEmitter.emit("test");
eventEmitter.emit("test");