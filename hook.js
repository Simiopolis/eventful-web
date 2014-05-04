var gith = require("gith").create(9001);

var execFile = require("child_process").execFile;

gith({
    repo: 'simiopolis/eventful-web'
    }).on('all', function(payload) {
        if(payload.branch === 'master') {
            execFile('/util/test', function(error, stdout, stderr){
                console.log('exec complete');
            });
        }   
    });
