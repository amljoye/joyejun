var os=require('os');

console.log('hostname:',os.hostname());
console.log('memory: %d / %d',os.freemem(),os.totalmem());
console.log('CPU info:\n');
console.dir(os.cpus());
console.log("network interface:\n");
console.dir(os.networkInterfaces());