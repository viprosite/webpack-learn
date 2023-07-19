#! /usr/bin/env node

const inquirer = require('inquirer');
const downloadGIt = require('download-git-repo');
const ora = require('ora')
const chalk = require('chalk')
const fs = require('fs')
// const rimraf = require('rimraf');


const { projectName, frameworkList, vueVersions, gitRepos } = require('./config');
const { dirIsExist } = require('./utils')


inquirer.prompt(projectName).then(async projName => {
    dirIsExist(process.cwd() + '/' + projName.projectName, projName.projectName)
    let ans = await inquirer.prompt(frameworkList)
    let selectFrameworkType = ans.frameworkType.toLowerCase()
    if (selectFrameworkType == 'vue') {
        let selectVueVersion = await inquirer.prompt(vueVersions)
        selectVueVersion = selectVueVersion.vueVersion
        let confirmGitUrl = gitRepos.find(item => item.type == selectFrameworkType && item.version == selectVueVersion.slice(0, selectVueVersion.indexOf('.')))
        fetchGit(confirmGitUrl.url, projName.projectName)
    } else {
        let confirmGitUrl = gitRepos.find(item => item.type == selectFrameworkType)
        fetchGit(confirmGitUrl.url, projName.projectName)
    }
})

function fetchGit(gitUrl, projectName) {
    // 等待动画
    const spinner = ora('fetching template...').start()
    downloadGIt(gitUrl, process.cwd() + '/' + projectName, err => {
        if (err) {
            console.log();
            console.log(chalk.red(err));
            spinner.fail('基础模板下载失败')
            process.exit(1)
        }
        spinner.succeed(chalk.green('项目创建成功'))
        console.log();
        console.log(chalk.green(`
                    ================================================

                    cd ${projectName}

                    安装依赖：npm install / yarn install

                    运行：npm start / yarn start

                    ================================================
            `));
    })
}