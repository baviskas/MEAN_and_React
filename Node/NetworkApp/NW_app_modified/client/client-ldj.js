var
    net = require('net'),
    LDJ = require('./ldj'),
    connection = net.connect({port : 9090});

var client = new LDJ(connection);
client.on('message', function(data){
    if (data.type === 'watching'){
        console.log('watching ' + data.file);
    } else if (data.type === 'change'){
        console.log('file ' + data.file + ' changed at ' + data.timeStamp);
    } else {
        console.log('unknown message ' + dataChunk);
    }
});