const os = require('os')

// Platform
console.log(os.platform())

// Arch
console.log(os.arch())

// CPU info
console.log(os.cpus())

// Free memory
console.log(os.freemem())

// All memory
console.log(os.totalmem())

// Root dir
console.log(os.homedir())

//System work time
console.log(os.uptime())
// https://nodejs.org/dist/latest-v18.x/docs/api/os.html