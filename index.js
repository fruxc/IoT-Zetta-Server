process.EventEmitter = require("events").EventEmitter;

const zetta = require("zetta");
var StateMachineDevice = require("./device.js");

zetta()
  .name("LED Server")
  .use(StateMachineDevice)
  .listen(1337, function () {
    console.log("Zetta is running at http://127.0.0.1:1337");
  });
