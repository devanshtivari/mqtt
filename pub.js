var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1234');
var topic = 'SMARDEN';
var message = 'Hello world!';

client.on('connect' , ()=>{
    setInterval(()=>{
        client.publish(topic,message);
        console.log('Message sent!!');
    },5000)
})