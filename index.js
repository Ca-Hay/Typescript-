"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
var name = prompt('What is your name? ');
var age = parseInt(prompt('How old are you? '));
var thefunny = prompt('What is your address? ');
console.log('Your name is ', name, ' and you are ', age, 'years old and you live at ', thefunny);
