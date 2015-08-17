var five = require("johnny-five");
var board = new five.Board();

var Light = function(pin){
    
    var pin = new five.Pin(pin);

    this.on = function(){
      console.log("on");
      pin.high()
    }

    this.off = function() {
      console.log("off");
      pin.low()
    };

  };

var Blinking = function(pin, duration){
  Light.call(this, pin);

  var baseOn = this.on;
  var baseOff = this.off;

  this.on = function(){
   //blink();
    var status = "off";

   interval = setInterval(function(){
    if (status === "off"){
      console.log("im blinking");
      status = "on";
      baseOn();
       
    }
    else {
      console.log("im off");
      //blink == this.on
      status = "off";
      baseOff();
    }
 }, duration);
   
};
this.off = function(pin){
    clearInterval(interval);
    baseOff();
} 
}


board.on('ready', function(){
  
  var light9 = new Blinking(9, 1000);
  light9.on()
   var light10 = new Blinking(10, 1000);
  light10.on()

  setTimeout(function(){
    light9.off()
    light10.off()
  }, 0);

  /*var theSwitch = new theSwitch(new Blinking(9));
  theSwitch.on();*/

});


