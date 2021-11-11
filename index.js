"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
var name = prompt('What is your name? ');
var age = prompt('How old are you? ');
var thefunny = prompt('Where do you live? ');
console.log('Your name is ', name, ' and you are ', age, 'years old and you live at ', thefunny);
