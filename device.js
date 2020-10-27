var Device = require("zetta").Device;
var util = require("util");

var LEDDevice = (module.exports = function () {
  Device.call(this);
});

util.inherits(LEDDevice, Device);

LEDDevice.prototype.init = function (config) {
  // Set up the LED Device
  config.type("LED_Device").state("off").name("LED Device");

  config
    // Define the transitions allowed by the LED Device
    .when("off", { allow: ["turn-on"] })
    .when("on", { allow: ["turn-off"] })

    // Map the transitions to JavaScript methods
    .map("turn-off", this.turnOff)
    .map("turn-on", this.turnOn);
};

LEDDevice.prototype.turnOff = function (cb) {
  this.state = "off";
  cb();
};

LEDDevice.prototype.turnOn = function (cb) {
  this.state = "on";
  cb();
};
