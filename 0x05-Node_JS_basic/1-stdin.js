/*eslint-disable*/
const { spawn } = require('node:child_process');
const child =  spawn('node');
console.log('Welcome to Holberton School, what is your name?');
child.stdin.write('console.log("Please enter your name:");');
process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    console.log(`Your name is: ${name}`);
    child.stdin.end();
});

process.on('SIGINT', () => {
    console.log('This important software is now closing');
    child.kill();
    process.exit();
});