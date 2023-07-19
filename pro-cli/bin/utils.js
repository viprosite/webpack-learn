const fs = require('fs');
const chalk = require('chalk');

exports.dirIsExist = function (dir, name) {
    let isExists = fs.existsSync(dir);
    if (isExists) {
        console.log(
            chalk.bgRed(
                `The ${name} project already exists in  directory. Please try to use another projectName`
            )
        );
        process.exit(1);
    }
};