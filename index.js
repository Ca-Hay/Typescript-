"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
var answer = prompt('Hello, what is your name? ');
console.log('Your name is ', answer);
