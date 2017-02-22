const exec = require('child_process').exec;

const log = function (error, stdout, stderr) {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    //console.log(`stdout: ${stdout}`);
    //console.log(`stderr: ${stderr}`);
};

const run = function (command, callback) {
    const execution = exec(command, {maxBuffer:1024*500}, function (error, stdout, stderr) {
        log(error, stdout, stderr);
    });
    execution.on('close', () => {
        callback();
    });
}

run('npm run ng build', function () {
    console.log('build ok');
    run('npm run desktop', function() {
        console.log('application reload');
    });
});