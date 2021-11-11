import * as promptSync from 'prompt-sync';
const prompt = promptSync();
let answer: string = prompt('Hello, what is your name? ');
console.log('Your name is ', answer);
