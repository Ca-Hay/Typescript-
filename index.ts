import * as promptSync from 'prompt-sync';
const prompt = promptSync();
let name: string = prompt('What is your name? ');
let age: number = prompt('How old are you? ');
let thefunny: string = prompt('Where do you live? ')
console.log('Your name is ', name, ' and you are ', age, 'years old and you live at ', thefunny);
