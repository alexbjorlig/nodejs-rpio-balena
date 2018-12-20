let rpio;

console.log(`Main program starting up, platform is ${process.platform}`);
// rpio can only be used on mac os
if (!process.platform.includes('darwin')){
    rpio = require('rpio');
} else {
    rpio = require('./rpioMock');
}