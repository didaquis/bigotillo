#!/usr/bin/env node
const { bold, yellow, bgBlack } = require('colorette');

const newline = '\n';
const bigotilloText = `${yellow(bold(bgBlack(' Bigotillo   {   } ')))}`;

const output = newline + bigotilloText + newline;

console.log(output); // eslint-disable-line no-console