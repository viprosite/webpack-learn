#! /usr/bin/env node

const commander = require('commander')

commander
    .version(require('../package.json').version)
    .usage('<command> [options]')
    .command('init', '创建一个vue或react基础项目')

commander.parse(process.argv)