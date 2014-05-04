var gith = require("gith").create(9001);

var exec = require("child_process").exec;

gith({
    repo: 'Simiopolis/eventful-web'
    }).on('all', function(payload) {
	console.log('received post!');
        if(payload.branch === 'master') {
            exec('./util/hook.sh', function(error, stdout, stderr){
		console.log(stdout);
		console.log("Finished executing hook.sh");
            });
        }   
    });
