import * as promptSync from 'prompt-sync';
const prompt = promptSync();
let name: string = prompt('What is your name? ');
let age: number = parseInt(prompt('How old are you? '));
let thefunny: string = prompt('What is your address? ')
console.log('Your name is ', name, ' and you are ', age, 'years old and you live at ', thefunny);
