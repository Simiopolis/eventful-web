var gith = require("gith").create(900t);

var execFile = require("child_process").execFile;

gith({
    repo: 'util/test'
    }).on('all', function(payload) {
        if(payload.branch === 'master') {
            execFile('/util/test', function(error, stdout, stderr){
                console.log('exec complete');
            });
        }   
    });