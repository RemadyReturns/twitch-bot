const tmi = require('tmi.js');
const config = require('./config.js')

const options = {

    options: {
        debug: true,
    },

    connection: {
        cluster: 'aws',
        reconnect: 'true',
    },

    identity: {
        username: 'rebotisson',
        password: config.token
    },

    channels: ['remadisson'],
};

const client = new tmi.client(options);
console.log(`config token log: ` + config.token)
client.connect();

client.on('connected', (address, port) => {
    client.action('remadisson', "Hi this is testing lulW!")    
})