#!/usr/bin/env node
import { name } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
export const userName = name();
console.log(`Hello, ${userName}!`);
