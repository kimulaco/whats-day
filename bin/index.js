#!/usr/bin/env node
const pkg = require('../package.json');
const program = require('commander');
const ora = require('ora');
const WhatsDay = require('../index');
let option = {};

program.
    version(pkg.version, '-v, --version').
    option('-l, --lang <lang>', 'Language.').
    option('-d, --date <date>', 'Date format.').
    parse(process.argv);

if (program.lang) {
    option.lang = program.lang;
}

const whatsDay = new WhatsDay(option);
const spinner = ora('Searching...').start();

whatsDay.search(program.date).then((content) => {
    spinner.stop();
    spinner.clear();
    console.log(content);
}).catch((error) => {
    spinner.stop();
    spinner.clear();
    console.error(error);
});
